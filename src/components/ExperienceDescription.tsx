'use client';
import Image from "next/image";

export const ExperienceDescription = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white">From Data Curiosity to AI Engineering</h2>
            <p className="text-base sm:text-lg text-amber-600 dark:text-amber-300 font-semibold">Bachelor of Data Science, Telkom University</p>
            <div className="text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed space-y-4">
                <p>My journey into technology began with a deep fascination for the stories hidden within data. This academic foundation was the launchpad for my career.</p>
                <p>My internship at <strong className="text-stone-900 dark:text-white">PT Astra Honda Motor</strong> plunged me into the world of industrial data, while my role as a Database Architect for <strong className="text-stone-900 dark:text-white">PT Bhakti Unggul Teknovasi</strong> allowed me to hone my skills in system design. Today, I am passionate about leveraging my diverse skills to build impactful, intelligent applications.</p>
            </div>
        </div>
    );
};