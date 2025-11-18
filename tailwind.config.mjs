/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      color: {

primary: '#6C5CE7',
accent: '#00CEC9',
secondary: '#F1F2F6',
dark: '#2D3436',
light: '#FFFFFF',


      }
    }
  },
  plugins: [],
};
