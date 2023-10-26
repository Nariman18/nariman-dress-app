import "../globals.css";
import type { Metadata } from "next";
import { siteConfig } from "../../../config/site";
import Providers from "@/components/Providers";

import { Header } from "@/components/Header";
import { SiteBlob } from "@/components/site-blob";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/icons8-shop-local-32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Providers>
          <div className="relative flex flex-col min-h-screen">
            <div className="lg:absolute hidden top-52 left-[400px] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob transition-all ease-in-out"></div>
            <div className="lg:absolute hidden  top-52 left-[620px] w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 transition-all ease-in-out"></div>
            <div className="lg:absolute hidden top-60 left-[510px] w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 transition-all ease-in-out"></div>
            <Header />
            <SiteBlob />
            <div>{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
