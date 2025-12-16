'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navWrapper = `fixed z-40 left-0 right-0 top-2 md:top-4 w-full flex justify-center pointer-events-none`;
  const headerClasses = `pointer-events-auto w-full max-w-5xl h-14 md:h-16 rounded-full px-5 md:px-6 flex items-center justify-between transition-all duration-300
    ${hasScrolled
      ? 'navbar-glassy shadow-lg shadow-stone-200/20 dark:shadow-stone-950/20'
      : 'bg-transparent border border-transparent'
    }`;

  const navLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#about', label: 'About' },
    { href: '/#cta', label: 'Call To Action!' },
  ];

  return (
    <>
      {/* Oval navbar */}
      <div className={navWrapper}>
        <header className={headerClasses}>
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/profiles/yaffa/name-logo.png"
                alt="Yaffazka Afazillah Wijaya Logo"
                width={120}
                height={34}
                priority
                className="hidden dark:block"
              />
              <Image
                src="/profiles/yaffa/name-logo-dark.png"
                alt="Yaffazka Afazillah Wijaya Logo"
                width={120}
                height={34}
                priority
                className="block dark:hidden"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={onContactClick}
              className="px-5 py-2 bg-amber-500 text-stone-900 text-sm font-semibold rounded-full hover:bg-amber-400 transition-colors shadow-md hover:shadow-lg"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Static background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-stone-50 dark:bg-stone-900 shadow-xl z-50"
            >
              <div className="flex items-center justify-between p-6 border-b border-stone-200 dark:border-stone-800">
                <h2 className="text-lg font-semibold text-stone-900 dark:text-white">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="px-6 py-8 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                <button
                  onClick={() => {
                    onContactClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-6 px-5 py-3 bg-amber-500 text-stone-900 font-semibold rounded-full hover:bg-amber-400 transition-colors shadow-md"
                >
                  Contact Me
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

    </>
  );
};
