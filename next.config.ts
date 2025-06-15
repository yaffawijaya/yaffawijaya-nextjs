/** @type {import('next').NextConfig} */
const nextConfig = {
  // This block tells Next.js which external domains are allowed for images.
  images: {
    remotePatterns: [
      // Previous domains for the tech scroller
      { protocol: 'https', hostname: 'images.icon-icons.com' },
      { protocol: 'https', hostname: 'pngimg.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'www.svgrepo.com' },
      { protocol: 'https', hostname: 'cdn4.iconfinder.com' },
      { protocol: 'https', hostname: 'download.logo.wine' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'but.co.id' },
      
      
      
      // New domains for your experience logos
      { protocol: 'https', hostname: 'bigdatatelyu.github.io' },
      { protocol: 'https', hostname: 'ik.imagekit.io' },
      { protocol: 'https', hostname: 'placehold.co' }, // For the placeholder project images
    ],
  },
};

export default nextConfig;
