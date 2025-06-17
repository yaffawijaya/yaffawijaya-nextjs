'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ExperienceDescription } from '@/components/ExperienceDescription';

type View = 'timeline' | 'description';

export const AboutSection = () => {
    const [activeView, setActiveView] = useState<View>('timeline');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <aside className="lg:col-span-2">
                <div className="lg:sticky lg:top-28">
                    <div className="p-2 bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-lg shadow-md dark:shadow-2xl shadow-stone-200/30 dark:shadow-stone-950">
                        <Image src="/profiles/yaffa/me.png" alt="Yaffazka Afazillah Wijaya" width={500} height={500} className="rounded-md object-cover w-full h-full" priority />
                    </div>
                </div>
            </aside>
            <div className="lg:col-span-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start mb-8 gap-4">
                    <div className="relative flex p-1 bg-white dark:bg-stone-800 rounded-full border border-stone-200 dark:border-stone-700 shadow-sm">
                        <button onClick={() => setActiveView('timeline')} className="relative w-28 rounded-full py-2 text-sm font-medium transition-colors z-10 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white">Timeline</button>
                        <button onClick={() => setActiveView('description')} className="relative w-28 rounded-full py-2 text-sm font-medium transition-colors z-10 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white">Description</button>
                        <div className="absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] bg-amber-500/20 rounded-full transition-transform duration-300 ease-in-out" style={{ transform: `translateX(${activeView === 'timeline' ? '0%' : '100%'})` }} />
                    </div>
                </div>
                
                <hr className="border-stone-200 dark:border-stone-700 mb-8" />
                <div>
                    {activeView === 'timeline' ? <ExperienceTimeline /> : <ExperienceDescription />}
                </div>
            </div>
        </div>
    );
};