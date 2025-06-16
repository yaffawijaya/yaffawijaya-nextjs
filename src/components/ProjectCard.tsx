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
      <div className="p-6 bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-700 hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 h-full shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-none">
        <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">{title}</h3>
        <p className="text-stone-600 dark:text-stone-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-xs text-stone-600 dark:text-stone-300 rounded-full group-hover:bg-amber-100 dark:group-hover:bg-amber-500 group-hover:text-amber-700 dark:group-hover:text-stone-900 transition-colors font-semibold border border-stone-200 dark:border-transparent group-hover:border-amber-200 dark:group-hover:border-transparent">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;