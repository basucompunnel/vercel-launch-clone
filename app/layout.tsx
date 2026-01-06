import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vercel Launch Clone",
  description: "Vercel-style product launch page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} font-sans bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
