"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

import { getSizeName } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast, useToast } from "@/components/ui/use-toast";
import { Product } from "../../types/Products";
import { getProduct } from "../../sanity/sanity-utils";

interface Props {
  products: Product;
  slug: string;
}

export function ProductInfo({ products, slug }: Props) {
  const { addItem, cartDetails, incrementItem } = useShoppingCart();

  const [selectedSize, setSelectedSize] = useState(products?.sizes[0]);
  const [pageData, setPageData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProduct(slug);
      setPageData(data);
    };
    fetchData();
  }, [slug]);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  const isInCart = cartDetails?.[products._id];
  function addToCart() {
    const item = {
      ...products,
      product_data: {
        size: selectedSize,
      },
    };
    isInCart ? incrementItem(item._id) : addItem(item);
    toast({
      title: `${item.name} (${getSizeName(selectedSize)})`,
      description: "Product added to cart",
      action: (
        <Link href="/cart">
          <Button variant="link" className="gap-x-2 whitespace-nowrap">
            <span>Open cart</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      ),
    });
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{pageData.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">
          {formatCurrencyString({
            value: pageData.price,
            currency: pageData.currency,
          })}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{pageData.descriptions}</div>
      </div>

      <div className="mt-4">
        <p>
          Size: <strong>{getSizeName(selectedSize)}</strong>
        </p>
        {pageData.sizes.map((size) => (
          <Button
            onClick={() => setSelectedSize(size)}
            key={size}
            className="mr-2 mt-4"
            variant={selectedSize === size ? "default" : "outlined"}
          >
            {getSizeName(size)}
          </Button>
        ))}
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            onClick={addToCart}
            type="button"
            className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Add to cart
          </Button>
        </div>
      </form>
    </div>
  );
}
