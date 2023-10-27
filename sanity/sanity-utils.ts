import { groq } from "next-sanity";

import { Product } from "../types/Products";
import { client } from "./lib/client";

export async function getProducts(searchParams: {}): Promise<Product[]> {
  const query = groq`
  *[_type == "product"] {
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
  console.log(query);
  return await client.fetch<Product[]>(query);
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
