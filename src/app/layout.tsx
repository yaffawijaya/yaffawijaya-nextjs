// This is now a Server Component again (no "use client")
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/LayoutClient"; // Import our new client wrapper

const inter = Inter({ subsets: ["latin"] });

// Exporting metadata is now allowed again!
export const metadata: Metadata = {
  title: "Yaffazka Afazillah Wijaya | Data Scientist & AI Engineer",
  description: "The personal portfolio of Yaffazka Afazillah Wijaya, showcasing advanced projects in Data Science, AI, Data Engineering, and GraphRAG.",
  icons: {
    icon: '/tab-icon.svg',
    apple: '/tab-icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        {/* We use our new client component to wrap the page content */}
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
