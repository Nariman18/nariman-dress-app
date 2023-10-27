"use client";

import { Product } from "../../types/Products";
import { useEffect, useState } from "react";
import { getProducts } from "../../sanity/sanity-utils";

interface Props {
  searchParams: {
    date?: string;
    price?: string;
    color?: string;
    category?: string;
    size?: string;
    search?: string;
  };
}

export function ProductLength({ searchParams }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProducts(searchParams);
      const sortProductPage = productData.sort(
        (b, a) =>
          new Date(b._created_at).getTime() - new Date(a._created_at).getTime()
      );
      setProducts(sortProductPage);
    };
    fetchData();
  }, [searchParams]);

  return (
    <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
      {products.length} product{products.length === 1 ? "" : "s"}
    </h1>
  );
}
