import { ProductSort } from "@/components/ProductSort";
import { siteConfig } from "../../../config/site";

import { ProductFilters } from "@/components/ProductFilters";
import { cn } from "@/lib/utils";
import { ProductGrid } from "@/components/ProductGrid";

import { getProducts } from "../../../sanity/sanity-utils";

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

export default async function Home({ searchParams }: Props) {
  const products = await getProducts(searchParams);

  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">
          {siteConfig.name}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">
          {siteConfig.description}
        </p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} product{products.length === 1 ? "" : "s"}
            </h1>
            {/* Product Sort */}
            <ProductSort />
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div
              className={cn(
                "grid grid-cols-1 gap-x-8 gap-y-10",
                products.length > 0
                  ? "lg:grid-cols-4"
                  : "lg:grid-cols-[1fr_3fr]"
              )}
            >
              <div className="hidden lg:block">
                {/* Product filters */}
                <ProductFilters />
              </div>
              {/* Product grid */}
              <ProductGrid searchParams={searchParams} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
