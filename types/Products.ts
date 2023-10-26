import { Image } from "sanity";
export type Product = {
  _id: string;
  _created_at: Date;
  title: string;
  name: string;
  image: string;
  images: string[];
  slug: string;
  categories: string[];
  sizes: string[];
  colors: string[];
  price: number;
  descriptions: string;
  sku: string;
  currency: string;
};

export type InventoryProducts = {
  id: string;
  name: string;
  image: string;
  images: string[];
  categories: string[];
  sizes: string[];
  colors: string[];
  price: number;
  descriptions: string;
  sku: string;
  currency: string;
};
