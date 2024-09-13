import { ProductSort } from "@/components/ProductSort";
import { siteConfiq } from "../../../config/site";
import { ProductLength } from "@/components/ProductLength";
import { ProductGridFilter } from "@/components/ProdcutGridFilter";

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
  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">
          {siteConfiq.name}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">
          {siteConfiq.description}
        </p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <ProductLength searchParams={searchParams} />
            {/* Product Sort */}
            <ProductSort />
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div>
              <ProductGridFilter searchParams={searchParams} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
