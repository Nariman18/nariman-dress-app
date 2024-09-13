import "../globals.css";
import type { Metadata } from "next";
import { siteConfiq } from "../../../config/site";
import Providers from "@/components/Providers";

import { Header } from "@/components/Header";
import { SiteBlob } from "@/components/site-blob";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: siteConfiq.name,
  description: siteConfiq.description,
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
