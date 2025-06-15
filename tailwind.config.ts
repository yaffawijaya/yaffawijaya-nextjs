import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Here we add your custom height values so Tailwind can use them.
      // The key is the class name (e.g., 'h-11') and the value is the CSS value.
      height: {
        '11': '2.75rem', // 44px
        '13': '3.25rem', // 52px
        '15': '3.75rem', // 60px
        '17': '4.25rem', // 68px
        '50': '12.5rem', // 200px
      }
    },
  },
  plugins: [],
} satisfies Config
