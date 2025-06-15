// FILE: src/components/Footer.tsx

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-gray-500 mt-24">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm border-t border-gray-800">
        <p>&copy; {currentYear} Yaffazka Afazillah Wijaya. Built with Next.js & Tailwind CSS.</p>
        <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/yaffawijaya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/yaffawijaya/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;