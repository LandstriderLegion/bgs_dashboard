import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landstrider BGS Dashboard",
  description: "BGS statistics for Landstrider Legion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
