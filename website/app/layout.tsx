import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trade Shock Observatory",
  description:
    "An interactive economics homepage exploring how tariffs and supply chain disruptions reshaped U.S.-China trade.",
  authors: [{ name: "Abhinav Ramakrishnan" }],
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
