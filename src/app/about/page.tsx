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
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-white">About & Experience</h1>
                    <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400">My journey into the world of data and AI.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    <aside className="lg:col-span-2">
                        <div className="lg:sticky lg:top-28">
                            <div className="p-2 bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-lg shadow-md dark:shadow-2xl shadow-stone-200/30 dark:shadow-stone-950">
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

                    <div className="lg:col-span-3">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                            <div className="relative flex p-1 bg-white dark:bg-stone-800 rounded-full border border-stone-200 dark:border-stone-700 shadow-sm">
                                <button
                                    onClick={() => setActiveView('timeline')}
                                    className="relative w-28 rounded-full py-2 text-sm font-medium transition-colors z-10 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white"
                                >
                                    Timeline
                                </button>
                                <button
                                    onClick={() => setActiveView('description')}
                                    className="relative w-28 rounded-full py-2 text-sm font-medium transition-colors z-10 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white"
                                >
                                    Description
                                </button>
                                <div
                                    className="absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] bg-amber-500/20 rounded-full transition-transform duration-300 ease-in-out"
                                    style={{ transform: `translateX(${activeView === 'timeline' ? '0%' : '100%'})` }}
                                />
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-5 py-2.5 bg-amber-500 text-stone-900 text-sm font-semibold rounded-full hover:bg-amber-400 transition-colors"
                            >
                                Let's Connect
                            </button>
                        </div>
                        
                        <hr className="border-stone-200 dark:border-stone-700 mb-8" />

                        <div>
                            {activeView === 'timeline' ? <ExperienceTimeline /> : <ExperienceDescription />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}