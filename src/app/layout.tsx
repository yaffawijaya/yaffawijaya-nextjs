// src/app/layout.tsx
// This is now a Server Component again (no "use client")
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Make sure this path is correct if LayoutClient.tsx is not directly in components/
import LayoutClient from "@/components/LayoutClient";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

// Exporting metadata is now allowed again!
export const metadata: Metadata = {
  title: "Yaffazka Afazillah Wijaya | Data Scientist & AI Engineer",
  description: "The personal portfolio of Yaffazka Afazillah Wijaya, showcasing advanced projects in Data Science, AI, Data Engineering, and GraphRAG.",
  icons: {
    icon: '/profiles/yaffa/tab-icon.svg',
    apple: '/profiles/yaffa/tab-icon.svg',
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
        {/* LayoutClient will now contain the Navbar, ThemeProvider, and ThemeToggle */}
        <Providers>
          <LayoutClient>
            {children}
          </LayoutClient>
        </Providers>
      </body>
    </html>
  );
}