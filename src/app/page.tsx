'use client';

import { useState } from 'react';
import { AboutSection } from "@/components/AboutSection";
import { ProjectScroller } from "@/components/ProjectScroller";
import { AnimationWrapper } from "@/components/AnimationWrapper";
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
        <section id="home" className="relative flex flex-col items-center justify-center text-center pt-32 md:pt-48 pb-20">
          {/* Background Gradient Orb */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

          <AnimationWrapper>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-stone-900 dark:text-white text-responsive-hero tracking-tight leading-tight">
              {heroData.name}
            </h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-400 dark:to-orange-200 font-bold">
              {heroData.role}
            </p>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl px-4 leading-relaxed mx-auto">
              {heroData.description}
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <a href="#projects" className="px-6 sm:px-8 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/20 text-sm sm:text-base">
                Explore My Work
              </a>
            </div>
          </AnimationWrapper>
        </section>

        <AnimationWrapper delay={0.2} className="w-full">
          <section id="skills">
            <TechLogoScroller />
          </section>
        </AnimationWrapper>

        <AnimationWrapper delay={0.3} className="w-full">
          <section id="projects">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-stone-900 dark:text-white mb-12 tracking-tight">
              Featured Work
            </h2>
            <ProjectScroller />
            <div className="text-center mt-12 sm:mt-16">
              <a href="/projects" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold text-base sm:text-lg hover:gap-3 transition-all">
                See All Projects Page <span>&rarr;</span>
              </a>
            </div>
          </section>
        </AnimationWrapper>

        <AnimationWrapper delay={0.4} className="w-full">
          <section id="about">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-stone-900 dark:text-white mb-16 tracking-tight">About & Experience</h2>
            <AboutSection />
          </section>
        </AnimationWrapper>

        <AnimationWrapper delay={0.5} className="w-full">
          <section id="cta">
            <CtaSection onBookProjectClick={() => setIsBookingModalOpen(true)} />
          </section>
        </AnimationWrapper>
      </div>
    </>
  );
}