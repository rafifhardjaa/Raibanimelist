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

        primary: '#ff3d71',
        accent: '#ffcc00',
        secondary: '#1e1e2e',
        dark: '#13131a',
        light: '#ffffff',

      }
    }
  },
  plugins: [],
};
