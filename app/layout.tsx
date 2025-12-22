import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WOGULE - Magazine",
  description: "Beautiful magazine-style landing page with elegant design and smooth animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
