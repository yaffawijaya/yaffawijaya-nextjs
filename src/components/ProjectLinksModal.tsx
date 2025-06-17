// FILE: src/components/ProjectLinksModal.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Define the types for the links and the modal props
interface ProjectLink {
  type: 'github' | 'medium' | 'youtube' | 'demo' | string; // Allows for custom types
  url: string;
  label: string;
}

interface ProjectLinksModalProps {
  isOpen: boolean;
  onClose: () => void;
  links: ProjectLink[];
  projectName: string;
}

// Icon mapping for different link types
const iconMap: { [key: string]: { src: string; alt: string } } = {
  github: { src: '/icons/github.png', alt: 'GitHub' },
  medium: { src: '/icons/medium.png', alt: 'Medium' },
  youtube: { src: '/icons/youtube.png', alt: 'YouTube' },
  gdrive: { src: '/icons/gdrive.png', alt: 'Google Drive' },
  // A generic fallback icon for any other type
  fallback: { src: '/icons/fallback-link.png', alt: 'Link' },
};

const ProjectLinksModal = ({ isOpen, onClose, links, projectName }: ProjectLinksModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">{projectName}</h2>
            <p className="text-stone-600 dark:text-stone-400 mb-6 text-sm sm:text-base">Explore the project's resources below.</p>

            <div className="space-y-4">
              {links.map((link) => {
                const icon = iconMap[link.type] || iconMap.fallback;
                return (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 w-full p-4 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 hover:border-amber-500 transition-all"
                  >
                    <Image src={icon.src} alt={icon.alt} width={32} height={32} className="object-contain" />
                    <span className="font-semibold text-stone-900 dark:text-white">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectLinksModal;