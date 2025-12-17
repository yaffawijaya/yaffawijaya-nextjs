'use client';
import Image from "next/image";

export const ExperienceDescription = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white">
                From Data Science to Real-Time Engineering & AI
            </h2>
            <p className="text-base sm:text-lg text-amber-600 dark:text-amber-300 font-semibold">
                Bachelor of Data Science, Telkom University
            </p>
            <div className="text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                    My journey began with a strong foundation in Data Science, but my focus has evolved into building the robust architectures that power modern data systems.
                </p>
                <p>
                    I gained practical industrial experience analyzing production data at <strong className="text-stone-900 dark:text-white">PT Astra Honda Motor</strong> and refined my cloud computing expertise during the <strong className="text-stone-900 dark:text-white">Bangkit Academy</strong> program.
                </p>
                <p>
                    Currently, as a Data Engineer at <strong className="text-stone-900 dark:text-white">TransTRACK</strong>, I specialize in developing real-time data pipelines using Apache Kafka and N8N. Beyond engineering, I am actively innovating with Generative AI and GraphRAG technologies to build intelligent data retrieval systems.
                </p>
            </div>
        </div>
    );
};