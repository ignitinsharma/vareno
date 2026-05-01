import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import CustomCursor from "@/components/shared/CustomCursor";
import ScrollProgress from "@/components/shared/ScrollProgress";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable} antialiased bg-[#0f0f0f] text-white`}
      >
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
