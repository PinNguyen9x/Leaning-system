import type { Metadata } from "next";
import "./globals.css";
import { manrope, roboto } from "@/components/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${roboto.variable}  font-primary `}>
        {children}
      </body>
    </html>
  );
}
