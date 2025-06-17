'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
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
            <button onClick={onClose} className="absolute top-4 right-4 text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">Let's Connect</h2>
            <p className="text-stone-600 dark:text-stone-400 mb-6 text-sm sm:text-base">Find me on these platforms. I'd love to hear from you!</p>

            <div className="space-y-4">
              <a href="https://www.linkedin.com/in/yaffawijaya/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full p-4 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 hover:border-amber-500 transition-all">
                <Image src="/icons/linkedin.png" alt="LinkedIn" width={32} height={32} />
                <span className="font-semibold text-stone-900 dark:text-white">Connect on LinkedIn</span>
              </a>

              <a href="mailto:yaffazka@gmail.com" className="flex items-center gap-4 w-full p-4 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 hover:border-amber-500 transition-all">
                <Image src="/icons/gmail.png" alt="Gmail" width={32} height={32} />
                <span className="font-semibold text-stone-900 dark:text-white">Send me an Email</span>
              </a>

              <a href="https://wa.me/6282126317401" target="_blank" className="flex items-center gap-4 w-full p-4 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 hover:border-amber-500 transition-all">
                <Image src="/icons/whatsapp.png" alt="WhatsApp" width={32} height={32} />
                <span className="font-semibold text-stone-900 dark:text-white">Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;