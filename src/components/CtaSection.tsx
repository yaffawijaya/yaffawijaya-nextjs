'use client';

export const CtaSection = ({ onBookProjectClick }: { onBookProjectClick: () => void }) => {
    return (
        <div className="relative text-center py-16 sm:py-20 md:py-28 px-4 overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-stone-900 dark:to-stone-800 border border-amber-200 dark:border-stone-800">
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.08)_0,_transparent_50%)] dark:bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.15)_0,_transparent_40%)] z-0"></div>
            
            <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 dark:text-white px-4">Empower Your Business with Cutting-Edge AI</h2>
                <p className="mt-4 text-stone-600 dark:text-stone-400 max-w-2xl mx-auto px-4 text-sm sm:text-base">
                    Seeking insights for your event on data science, analytics, or data engineering projects? Discover strategies for automating data pipelines and harnessing machine learning.
                </p>
                <div className="mt-8 sm:mt-10">
                    <button 
                        onClick={onBookProjectClick}
                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg text-sm sm:text-base"
                    >
                        Book a Project
                    </button>
                </div>
            </div>
        </div>
    );
};