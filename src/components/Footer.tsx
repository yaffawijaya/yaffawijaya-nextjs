export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-stone-500 dark:text-stone-400 mt-24">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center text-sm border-t border-stone-200 dark:border-stone-800/50">
        <p>&copy; {currentYear} Yaffazka Afazillah Wijaya. Built with Next.js & Tailwind CSS.</p>
        <div className="flex justify-center space-x-8 mt-6">
          <a href="https://github.com/yaffawijaya" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yaffawijaya/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;