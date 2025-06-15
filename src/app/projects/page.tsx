// FILE: src/app/projects/page.tsx
// This is the main project gallery page.

import ProjectCard from "@/components/ProjectCard";
import { allProjectsData } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <div className="max-w-7xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white">My Portfolio</h1>
                <p className="mt-4 text-lg text-stone-400 max-w-2xl mx-auto">
                    A collection of my work in data science, AI engineering, and database architecture.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjectsData.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        link={`/projects/${project.slug}`}
                    />
                ))}
            </div>
        </div>
    );
}
