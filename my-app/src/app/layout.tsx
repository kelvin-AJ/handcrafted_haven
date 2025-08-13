import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "Discover the beauty of handcrafted items that tell a story. Each piece is unique, made with care and attention to detail. From home decor to personal accessories, find something special that resonates with you. Our artisans pour their heart and soul into every creation, ensuring that you receive not just a product, but a piece of art that carries the essence of craftsmanship. Join us in celebrating the art of handmade and support local artisans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}