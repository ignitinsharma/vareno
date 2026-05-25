import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import CustomCursor from "@/components/shared/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Vareno — India's #1 Marketplace Agency",
  description:
    "E-commerce growth experts for Indian marketplaces. Listing, operations, and ads — end-to-end marketplace services that scale sales on Amazon, Flipkart, and beyond.",
  openGraph: {
    title: "Vareno — India's #1 Marketplace Agency",
    description:
      "E-commerce growth experts for Indian marketplaces. Listing, operations, and ads — end-to-end marketplace services that scale sales on Amazon, Flipkart, and beyond.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vareno — India's #1 Marketplace Agency",
    description:
      "E-commerce growth experts for Indian marketplaces. Listing, operations, and ads — end-to-end marketplace services that scale sales on Amazon, Flipkart, and beyond.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-black`}>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
