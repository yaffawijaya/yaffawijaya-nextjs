'use client';
import Image from "next/image";

export const ExperienceDescription = () => {
    // The layout is now correctly structured with a parent grid.
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">From Data Curiosity to AI Engineering</h2>
            <p className="text-lg text-amber-300 font-semibold">Bachelor of Data Science, Telkom University</p>
            <div className="text-stone-300 text-lg leading-relaxed space-y-4">
                <p>My journey into technology began with a deep fascination for the stories hidden within data. This academic foundation was the launchpad for my career.</p>
                <p>My internship at <strong className="text-white">PT Astra Honda Motor</strong> plunged me into the world of industrial data, while my role as a Database Architect for <strong className="text-white">PT Bhakti Unggul Teknovasi</strong> allowed me to hone my skills in system design. Today, I am passionate about leveraging my diverse skills to build impactful, intelligent applications.</p>
            </div>
        </div>
    );
};
