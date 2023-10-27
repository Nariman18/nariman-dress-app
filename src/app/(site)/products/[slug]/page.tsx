import { ProductInfo } from "@/components/ProductInfo";
import { ProductGallery } from "@/components/ProductGallery";
import { getProduct } from "../../../../../sanity/sanity-utils";

interface Props {
  params: { slug: string };
}

export default async function Page({ params }: Props) {
  const slug = params.slug;
  const products = await getProduct(slug);

  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          <ProductGallery slug={products.slug} />
          <ProductInfo products={products} slug={products.slug} />
        </div>
      </div>
    </main>
  );
}
