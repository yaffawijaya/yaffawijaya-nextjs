'use client'; // This is our new client component

import { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

// This component wraps your page content (children)
export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* All the client-side logic and components are now here */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navbar onContactClick={() => setIsModalOpen(true)} />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}
