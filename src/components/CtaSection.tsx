'use client';

// This component accepts a function to call when its button is clicked
export const CtaSection = ({ onBookProjectClick }: { onBookProjectClick: () => void }) => {
    return (
        <div className="relative text-center py-20 md:py-28 px-4 overflow-hidden rounded-3xl bg-stone-900 border border-stone-800">
             {/* Background Glow Effect */}
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.15)_0,_transparent_40%)] z-0"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Empower Your Business with Cutting-Edge AI</h2>
                <p className="mt-4 text-stone-400 max-w-2xl mx-auto">
                    Seeking insights for your event on data science, analytics, or data engineering projects? Discover strategies for automating data pipelines and harnessing machine learning.
                </p>
                <div className="mt-10">
                    <button 
                        onClick={onBookProjectClick}
                        className="px-8 py-3 bg-stone-800 border border-amber-500/50 text-white font-semibold rounded-full hover:bg-stone-700 hover:border-amber-500 transition-all duration-300 shadow-lg"
                    >
                        Book a Project
                    </button>
                </div>
            </div>
        </div>
    );
};
