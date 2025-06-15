import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-amber-500 dark:text-amber-400">404</h1>
      <h2 className="mt-4 text-xl sm:text-2xl md:text-4xl font-semibold text-stone-900 dark:text-white">Page Not Found</h2>
      <p className="mt-4 max-w-md text-stone-600 dark:text-stone-400 text-sm sm:text-base">
        Sorry, the page you are looking for does not exist or has been moved. Let's get you back on track.
      </p>
      <div className="mt-10">
        <Link href="/" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-amber-500 text-stone-900 font-semibold rounded-md hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}