'use client'

import { useState } from 'react'
import LLMChatModal from './LLMChatModal'

export const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-full text-stone-600 dark:text-gray-500 mt-24">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm border-t border-stone-200 dark:border-gray-800">
          <p>&copy; {currentYear} Yaffazka Afazillah Wijaya. Built with Next.js & Tailwind CSS.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/yaffawijaya" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/yaffawijaya/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>

          {/* 🔒 Hidden Experimental Toggle */}
          <div className="mt-4 opacity-40 hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsChatOpen(true)}
              className="text-xs underline hover:text-blue-600"
            >
              Try experimental chat with Yaffa LLM
            </button>
          </div>
        </div>
      </footer>

      <LLMChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};
