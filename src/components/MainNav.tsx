import Link from "next/link";
import Image from "next/image";

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative md:w-[50px] md:h-[50px] w-[40px] h-[40px]">
          <Image
            src="/clothinglogo.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        <span className="inline-block md:text-xl sm:text-lg text-sm font-bold">
          N&apos;s Clothing
        </span>
      </Link>
    </div>
  );
}
