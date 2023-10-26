"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { shimmer, toBase64 } from "@/lib/image";
import { Product } from "../../types/Products";
import { urlForImage } from "../../sanity/lib/image";
import { getProduct } from "../../sanity/sanity-utils";

interface Props {
  slug: string;
}

export function ProductGallery({ slug }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
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

  return (
    <div className="flex flex-col-reverse">
      {/* Image Grid */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <ul className="grid grid-cols-4 gap-6">
          {pageData.images.map((image, index) => (
            <div
              key={image._key as string}
              onClick={() => setSelectedImage(index)}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase hover:bg-gray-50"
            >
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <Image
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                    shimmer(200, 200)
                  )}`}
                  src={urlForImage(image).url()}
                  width={200}
                  height={200}
                  alt={pageData.name}
                  className="h-full w-full object-cover object-center"
                />
              </span>
              {index === selectedImage && (
                <span
                  className="pointer-events-none absolute inset-0 rounded-md ring-4 ring-indigo-500 ring-offset-2"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </ul>
      </div>

      {/* Main Image */}
      <div className="w-full">
        <Image
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64, ${toBase64(
            shimmer(600, 750)
          )}`}
          priority
          src={urlForImage(pageData.images[selectedImage]).url()}
          alt={`Main ${pageData.name} image`}
          width={600}
          height={750}
          className="h-full w-full border-2 border-gray-200 object-cover object-center shadow-sm dark:border-gray-800 sm:rounded-lg"
        />
      </div>
    </div>
  );
}
