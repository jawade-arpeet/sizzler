import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sizzler",
  description: "Recipes for all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen antialiased font-serif", inter.className)}
      >
        {children}
      </body>
    </html>
  );
}
