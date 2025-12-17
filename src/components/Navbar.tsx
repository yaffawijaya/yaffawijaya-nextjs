// File: src/components/Navbar.tsx

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setHasScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  const navbarClasses = `fixed top-4 left-0 right-0 w-full z-50 transition-all duration-300 ${hasScrolled ? 'top-0' : 'top-4'}`;
  const headerClasses = `max-w-5xl mx-auto rounded-full border shadow-lg transition-all duration-300 ${hasScrolled
      ? 'backdrop-blur-sm backdrop-saturate-200 bg-white/50 dark:bg-stone-900/50 border-stone-200/60 dark:border-stone-700/60 shadow-stone-200/50 dark:shadow-stone-950/50'
      : 'bg-transparent border-transparent'
    }`;

  const navLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#about', label: 'About' },
    { href: '/#cta', label: 'Call To Action!' },
  ];

  return (
    <>
      <div className={navbarClasses}>
        <header className={headerClasses}>
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/profiles/yaffa/name-logo.png"
                  alt="Yaffazka Afazillah Wijaya Logo"
                  width={120}
                  height={34}
                  priority
                  className="dark:invert-0 invert-0 dark:block hidden"
                />
                <Image
                  src="/profiles/yaffa/name-logo-dark.png"
                  alt="Yaffazka Afazillah Wijaya Logo"
                  width={120}
                  height={34}
                  priority
                  className="dark:hidden block"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-6">
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
            </div>

            <div className="hidden md:block">
              <button
                onClick={onContactClick}
                className="px-5 py-2 bg-amber-500 text-stone-900 text-sm font-semibold rounded-full hover:bg-amber-400 transition-colors shadow-md hover:shadow-lg"
              >
                Contact Me
              </button>
            </div>

            {/* Mobile Menu Button */}
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
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <nav className="fixed top-0 right-0 bottom-0 w-64 bg-stone-50 dark:bg-stone-900 shadow-xl">
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};