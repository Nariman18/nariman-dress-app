import Providers from "@/components/Providers";
import "../globals.css";

export const metadata = {
  title: "Successful payment",
  description: "Success payment order information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
