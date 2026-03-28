import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malvorah | Where Ambition Meets Opportunity",
  description:
    "Malvorah connects high-potential talent with forward-thinking businesses. Accelerate careers, drive growth, and build a stronger economy through real-world experience.",
  keywords: [
    "talent placement",
    "product management",
    "career accelerator",
    "go-to-market consulting",
    "digital literacy",
    "workforce development",
  ],
  openGraph: {
    title: "Malvorah | Where Ambition Meets Opportunity",
    description:
      "We connect ambitious talent with real opportunities at real companies. Launch your career or find your next hire.",
    type: "website",
    url: "https://malvorah.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-white text-slate-800">{children}</body>
    </html>
  );
}
