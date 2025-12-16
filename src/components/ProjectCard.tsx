'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
  return (
    <Link href={link} className="block group">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="p-6 bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm rounded-xl border border-stone-200 dark:border-stone-700/50 hover:bg-white dark:hover:bg-stone-800 hover:border-amber-400 dark:hover:border-amber-500/50 transition-colors duration-300 h-full shadow-sm hover:shadow-xl dark:shadow-stone-950/20"
      >
        <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{title}</h3>
        <p className="text-stone-600 dark:text-stone-300 mb-6 leading-relaxed text-sm md:text-base">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-stone-100 dark:bg-stone-900/50 text-xs font-medium text-stone-600 dark:text-stone-400 rounded-full group-hover:bg-amber-100/50 dark:group-hover:bg-amber-900/20 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors border border-stone-200 dark:border-stone-800 group-hover:border-amber-200 dark:group-hover:border-amber-500/30">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;