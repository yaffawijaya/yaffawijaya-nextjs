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

      {/* Updated: Added pt-20 to this main div.
        This pushes all content down initially to clear the fixed navbar,
        but as you scroll, content will pass behind the navbar,
        allowing the backdrop-filter to create the blur effect.
        You might adjust 'pt-20' based on your navbar's height for optimal spacing.
      */}
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-36 px-4 sm:px-6 lg:px-8 mb-24 pt-20"> {/* <--- MODIFIED LINE */}
        {/* The Hero Section now uses the imported data */}
        <section id="home" className="flex flex-col items-center justify-center text-center"> {/* Removed pt-32/pt-40 here */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            {heroData.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-amber-300 font-semibold">
            {heroData.role}
          </p>
          <p className="mt-6 text-md text-stone-400 max-w-2xl">
            {heroData.description}
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-amber-500 text-stone-900 font-semibold rounded-md hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
              Explore My Work
            </a>
          </div>
        </section>

        <section id="skills">
          <TechLogoScroller />
        </section>

        <section id="projects">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Featured Work
          </h2>
          <ProjectScroller />
          <div className="text-center mt-16">
            <a href="/projects" className="text-amber-400 hover:text-amber-300 font-semibold text-lg">
              See All Projects Page &rarr;
            </a>
          </div>
        </section>

        <section id="about">
          <h2 className="text-3xl font-bold text-center text-white mb-16">About & Experience</h2>
          <AboutSection />
        </section>

        <section id="cta">
          <CtaSection onBookProjectClick={() => setIsBookingModalOpen(true)} />
        </section>
      </div>
    </>
  );
}