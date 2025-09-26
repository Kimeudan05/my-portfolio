/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // 👈 enables class-based dark mode
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        accent: "#2563eb",
      },
    },
  },
  plugins: [],
};
