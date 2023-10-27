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
  const dateOrder = date ? `| order(_createdAt ${searchParams.date})` : "";
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

  return await client.fetch<Product[]>(
    groq`
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
    `
  );
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
