'use client'; 

import { useState } from 'react';
import { AboutSection } from "@/components/AboutSection";
import { ProjectScroller } from "@/components/ProjectScroller";
import TechLogoScroller from "@/components/TechLogoScroller";
import { CtaSection } from "@/components/CtaSection";
import { BookingModal } from "@/components/BookingModal";
import { heroData } from '@/data/hero';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

      <div className="max-w-7xl mx-auto space-y-24 md:space-y-36 px-4 sm:px-6 lg:px-8 mb-24">
        <section id="home" className="flex flex-col items-center justify-center text-center pt-32 md:pt-40">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-stone-900 dark:text-white text-responsive-hero tracking-tight">
            {heroData.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-amber-600 dark:text-amber-300 font-semibold">
            {heroData.role}
          </p>
          <p className="mt-6 text-sm sm:text-base md:text-md text-stone-600 dark:text-stone-400 max-w-2xl px-4">
            {heroData.description}
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#projects" className="px-4 sm:px-6 py-2.5 sm:py-3 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20 text-sm sm:text-base">
              Explore My Work
            </a>
          </div>
        </section>
        
        <section id="skills">
          <TechLogoScroller />
        </section>

        <section id="projects">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-stone-900 dark:text-white mb-8 sm:mb-12">
            Featured Work
          </h2>
          <ProjectScroller />
          <div className="text-center mt-12 sm:mt-16">
            <a href="/projects" className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold text-base sm:text-lg">
              See All Projects Page &rarr;
            </a>
          </div>
        </section>

        <section id="about">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-stone-900 dark:text-white mb-12 sm:mb-16">About & Experience</h2>
          <AboutSection />
        </section>
        
        <section id="cta">
          <CtaSection onBookProjectClick={() => setIsBookingModalOpen(true)} />
        </section>
      </div>
    </>
  );
}