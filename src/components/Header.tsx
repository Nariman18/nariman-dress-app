"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Edit, ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ThemeToggle } from "./ThemeToggle";
import { MainNav } from "./MainNav";

export function Header() {
  const { cartCount } = useShoppingCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearchQuery = searchParams.get("search") ?? "";

  function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search");
    router.replace(`/?search=${searchQuery}`);
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white dark:bg-black">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />
        <form
          onSubmit={onSubmit}
          className="hidden items-center lg:inline-flex"
        >
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-9 lg:w-[300px]"
            defaultValue={defaultSearchQuery}
          />
        </form>
        <div className="flex items-center space-x-1">
          <Link href="/cart">
            <Button size="sm" variant="ghost">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">{cartCount}</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
