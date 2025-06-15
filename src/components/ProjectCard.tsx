// FILE: src/components/ProjectCard.tsx

import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
  return (
    <Link href={link} className="block group">
      <div className="p-6 bg-stone-800 rounded-lg border border-stone-700 hover:bg-stone-700 hover:border-amber-500 transition-all duration-300 h-full">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-stone-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-stone-700 text-xs text-stone-300 rounded-full group-hover:bg-amber-500 group-hover:text-stone-900 transition-colors font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;