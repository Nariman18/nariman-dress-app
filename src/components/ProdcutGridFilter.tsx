"use client";

import { Product } from "../../types/Products";
import { useEffect, useState } from "react";
import { getProducts } from "../../sanity/sanity-utils";
import { ProductFilters } from "./ProductFilters";
import { cn } from "@/lib/utils";
import { ProductGrid } from "./ProductGrid";

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

export function ProductGridFilter({ searchParams }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const productData = await getProducts(searchParams);
      const sortProductPage = productData.sort(
        (b, a) =>
          new Date(b._created_at).getTime() - new Date(a._created_at).getTime()
      );

      if (isMounted) {
        setProducts(sortProductPage);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [searchParams]);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-8 gap-y-10",
        products.length > 0 ? "lg:grid-cols-4" : "lg:grid-cols-[1fr_3fr]"
      )}
    >
      <div className="hidden lg:block">
        {/* Product filters */}
        <ProductFilters />
      </div>
      {/* Product grid */}
      <ProductGrid searchParams={searchParams} />
    </div>
  );
}
