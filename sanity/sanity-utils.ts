import { groq } from "next-sanity";

import { Product } from "../types/Products";
import { client } from "./lib/client";

export async function getProducts(searchParams: {
  date?: string;
  price?: string;
  color?: string;
  category?: string;
  size?: string;
  search?: string;
}): Promise<Product[]> {
  const { date, price, color, category, size, search } = searchParams;

  const priceOrder = price ? `| order(price ${searchParams.price})` : "";
  const dateOrder = date ? `| order(_created_at ${searchParams.date})` : "";
  const order = `${priceOrder} ${dateOrder}`;

  const productFilter = `_type == "product"`;
  const colorFilter = color ? `&& "${color}" in colors` : "";
  const categoryFilter = category ? `&& "${category}" in categories` : "";
  const sizeFilter = size ? `&& "${size}" in sizes` : "";

  const searchWords = search ? search.split(" ") : [];
  const searchFilters = searchWords
    .map((word) => {
      return `(
      colors match "${word}" ||
      categories match "${word}" ||
      name match "${word}"
    )`;
    })
    .join(" && ");

  const searchFilter = searchWords.length > 0 ? `&& ${searchFilters}` : "";
  const filter = `*[${productFilter}${colorFilter}${categoryFilter}${sizeFilter}${searchFilter}]`;

  try {
    const query = groq`
    ${filter}${order} {
            _id,
            _created_at,
            colors,
            categories,
            name,
            sku,
            "image": image.asset->url,
            descriptions,
            currency,
            price,
            title,
            "slug": slug.current
        }
    `;
    console.log("Executing GROQ Query:", query); // Optional: log the query
    const products = await client.fetch<Product[]>(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throwing the error if you want to handle it further up the chain
  }
}

export async function getProduct(slug: string): Promise<Product> {
  return await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      _created_at,
      "id": _id,
      name,
      sku,
      descriptions,
      "images": images[].asset->url,
      price,
      currency,
      sizes,
      categories,
      colors,
      "slug": slug.current
  }`,
    { slug }
  );
}
