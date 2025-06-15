import ProjectCard from "@/components/ProjectCard";
import { allProjectsData } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <div className="max-w-7xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-white">My Portfolio</h1>
                <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto px-4">
                    A collection of my work in data science, AI engineering, and database architecture.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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