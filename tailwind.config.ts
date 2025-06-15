import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Your defined custom color palette
      colors: {
        'primary': '#181C14',    // Darkest Background
        'secondary': '#3C3D37',  // UI Elements, Cards
        'accent': '#697565',     // Borders, Highlights, Accent Text
        'text-main': '#ECDFCC',  // Main Text
        'text-muted': '#A69E90', // Muted/Subtle Text
      },
      // Custom height values
      height: {
        '11': '2.75rem', '13': '3.25rem', '15': '3.75rem', 
        '17': '4.25rem', '20': '5rem', '50': '12.5rem',
      }
    },
  },
  plugins: [],
} satisfies Config
