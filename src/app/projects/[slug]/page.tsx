import Image from 'next/image';
import { allProjectsData } from '@/data/projects';

const getProjectDetails = (slug: string) => {
  return allProjectsData.find(p => p.slug === slug) || null;
};

const FeatureListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <svg className="flex-shrink-0 w-5 h-5 text-amber-500 dark:text-amber-400 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
    <span>{children}</span>
  </li>
);


export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectDetails(params.slug);

  if (!project) {
    return <div className="text-center py-40 text-stone-900 dark:text-white">Project not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-white">{project.title}</h1>
        <p className="mt-4 text-base sm:text-lg text-amber-600 dark:text-amber-400">Case Study</p>
      </div>

      <div className="mb-12 sm:mb-16 flex justify-center">
        <div className="w-full max-w-4xl bg-white dark:bg-stone-900/50 p-4 border border-stone-200 dark:border-stone-700/60 rounded-lg flex justify-center items-center shadow-xl dark:shadow-2xl shadow-stone-200/50 dark:shadow-stone-950">
          <Image
            src={project.imageUrl}
            alt={`Image for ${project.title}`}
            width={500}
            height={500}
            className="rounded-lg object-contain w-full h-auto max-h-[250px] sm:max-h-[350px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28 bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-4">Project Info</h3>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-sm font-semibold text-stone-600 dark:text-stone-400">Role</span>
                <span className="text-stone-900 dark:text-white">{project.role}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-sm font-semibold text-stone-600 dark:text-stone-400">Duration</span>
                <span className="text-stone-900 dark:text-white">{project.duration}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-sm font-semibold text-stone-600 dark:text-stone-400">Technologies</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-xs text-stone-600 dark:text-stone-300 rounded-full font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
              <li className="flex flex-col pt-4 border-t border-stone-200 dark:border-stone-700">
                <a href="#" className="w-full text-center px-5 py-2 bg-amber-500 text-stone-900 text-sm font-semibold rounded-full hover:bg-amber-400 transition-colors">
                  View Code on GitHub
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <article className="lg:col-span-8 text-stone-700 dark:text-stone-300 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white border-b border-stone-200 dark:border-stone-700 pb-3">The Challenge</h2>
            <p className="text-base sm:text-lg leading-relaxed">{project.caseStudy.challenge}</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white border-b border-stone-200 dark:border-stone-700 pb-3">Our Solution</h2>
            <p className="text-base sm:text-lg leading-relaxed">{project.caseStudy.solution}</p>
          </div>
          
          <div className="bg-amber-50 dark:bg-stone-800/50 border border-amber-200 dark:border-stone-700 rounded-lg p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white mb-4">Key Features & Results</h3>
            <ul className="space-y-3 text-base sm:text-lg">
              <FeatureListItem>Engineered a robust GraphRAG system for health data.</FeatureListItem>
              <FeatureListItem>Achieved high-accuracy entity extraction with GPT-4o.</FeatureListItem>
              <FeatureListItem>Delivered an intuitive Streamlit UI for interaction.</FeatureListItem>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white border-b border-stone-200 dark:border-stone-700 pb-3">Technical Details</h2>
            <p className="text-base sm:text-lg leading-relaxed">{project.caseStudy.technicalDetails}</p>
          </div>

          <div className="pt-8">
            <a href="/projects" className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold text-base sm:text-lg transition-colors">
              &larr; Back to All Projects
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}