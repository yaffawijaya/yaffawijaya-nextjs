'use client';

import { useState, useEffect } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialize theme on mount
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const root = window.document.documentElement;
    root.classList.add(savedTheme);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navbar onContactClick={() => setIsModalOpen(true)} />
      
      <main>
        {children}
      </main>

      <Footer />
      <ThemeToggle />
    </>
  );
}