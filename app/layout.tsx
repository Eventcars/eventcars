import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EventCars — Luxury Car Rental Marketplace in Denmark",
  description:
    "Rent Ferrari, Lamborghini, Rolls-Royce, Porsche and Bentley in Denmark. Search by city, date and category on Denmark's premium car rental marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black font-sans text-cream">
        {children}
      </body>
    </html>
  );
}
