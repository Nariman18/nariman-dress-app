"use client";

import Image from "next/image";
import Link from "next/link";

import { XCircle } from "lucide-react";
import { formatCurrencyString } from "use-shopping-cart";
import { Product } from "../../types/Products";
import { shimmer, toBase64 } from "@/lib/image";
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

export function ProductGrid({ searchParams }: Props) {
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

  if (products.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-gray-800 bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products.map((product) => (
        <Link
          key={product._id}
          href={`/products/${product.slug}`}
          className="group text-sm"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                shimmer(225, 280)
              )}`}
              src={product.image}
              alt={product.name}
              width={225}
              height={280}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-4 font-medium">{product.name}</h3>
          <p className="mt-2 font-medium">
            {formatCurrencyString({
              currency: product.currency,
              value: product.price,
            })}
          </p>
        </Link>
      ))}
    </div>
  );
}
