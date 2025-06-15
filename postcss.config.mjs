// postcss.config.mjs

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'autoprefixer': {},
    // Add postcss-preset-env here
    'postcss-preset-env': {
      stage: 1, // Ensures backdrop-filter is properly processed
      features: { // Optional: You can specify features if needed, or remove this block
        'has-pseudo-class': false // Can sometimes prevent issues
      }
    },
  },
};

export default config;