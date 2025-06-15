'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setHasScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  const navbarClasses = `fixed top-4 left-0 right-0 w-full z-50 transition-all duration-300 ${hasScrolled ? 'top-0' : 'top-4'}`;
  const headerClasses = `max-w-5xl mx-auto rounded-full border shadow-lg transition-all duration-300 ${hasScrolled ? 'navbar-glassy border-stone-700/60' : 'bg-transparent border-transparent'}`;

  return (
    <div className={navbarClasses}>
      <header className={headerClasses}>
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/yaffawijaya-name-logo.png" alt="Yaffazka Afazillah Wijaya Logo" width={120} height={34} priority />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-6">
              <a href="/#home" className="text-stone-300 hover:text-white text-sm font-medium transition-colors">Home</a>
              <a href="/#projects" className="text-stone-300 hover:text-white text-sm font-medium transition-colors">Projects</a>
              <a href="/#about" className="text-stone-300 hover:text-white text-sm font-medium transition-colors">About</a>
              <a href="/#cta" className="text-stone-300 hover:text-white text-sm font-medium transition-colors">Call To Action!</a>
            </div>
          </div>
          <div className="hidden md:block">
             <button onClick={onContactClick} className="px-5 py-2 bg-amber-500 text-stone-900 text-sm font-semibold rounded-full hover:bg-amber-400 transition-colors">
                Contact Me
              </button>
          </div>
        </div>
      </header>
    </div>
  );
};
