'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ExperienceDescription } from '@/components/ExperienceDescription';
import ContactModal from '@/components/ContactModal';

type View = 'timeline' | 'description';

export default function AboutPage() {
    const [activeView, setActiveView] = useState<View>('timeline');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="max-w-7xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">About & Experience</h1>
                    <p className="mt-4 text-lg text-stone-400">My journey into the world of data and AI.</p>
                </div>

                {/* New Integrated Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Left Column: Your Image */}
                    <aside className="lg:col-span-2">
                        <div className="sticky top-28">
                            <div className="p-2 bg-stone-800/50 border border-stone-700 rounded-lg shadow-2xl shadow-stone-950">
                                <Image
                                    src="/me.png"
                                    alt="Yaffazka Afazillah Wijaya"
                                    width={500}
                                    height={500}
                                    className="rounded-md object-cover w-full h-full"
                                    priority
                                />
                            </div>
                        </div>
                    </aside>

                    {/* Right Column: Dynamic Content */}
                    <div className="lg:col-span-3">
                        {/* Control Bar: Switcher + Button */}
                        <div className="flex items-center justify-between mb-8">
                            {/* View Switcher */}
                            <div className="relative flex p-1 bg-stone-800 rounded-full border border-stone-700">
                                <button
                                    onClick={() => setActiveView('timeline')}
                                    className="relative w-28 rounded-full py-2 text-sm font-medium transition-colors z-10 text-stone-300 hover:text-white"
                                >
                                    Timeline
                                </button>
                                <button
                                    onClick={() => setActiveView('description')}
                                    className="relative w-28 rounded-full py-2 text-sm font-medium transition-colors z-10 text-stone-300 hover:text-white"
                                >
                                    Description
                                </button>
                                {/* The animated highlight */}
                                <div
                                    className="absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] bg-amber-500/20 rounded-full transition-transform duration-300 ease-in-out"
                                    style={{ transform: `translateX(${activeView === 'timeline' ? '0%' : '100%'})` }}
                                />
                            </div>

                            {/* Let's Connect Button */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-5 py-2.5 bg-amber-500 text-stone-900 text-sm font-semibold rounded-full hover:bg-amber-400 transition-colors"
                            >
                                Let's Connect
                            </button>
                        </div>
                        
                        <hr className="border-stone-700 mb-8" />

                        {/* Conditional Rendering */}
                        <div>
                            {activeView === 'timeline' ? <ExperienceTimeline /> : <ExperienceDescription />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
