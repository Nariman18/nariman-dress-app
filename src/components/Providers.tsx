"use client";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "use-shopping-cart";
import { ThemeProvider } from "next-themes";
import { TailwindIndicator } from "./tailwind-indicator";

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props) {
  return (
    <CartProvider
      shouldPersist
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
      currency="USD"
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster />
        {children}
        <TailwindIndicator />
      </ThemeProvider>
    </CartProvider>
  );
}

export default Providers;
