/** @type {import('tailwindcss').Config} */
// Yellow + White + soft-black (gradient) theme. The "brand" scale is now a neutral/black scale so every
// existing class (bg-brand-*, text-brand-*, border-brand-*) follows the new theme.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["Poppins", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#F5F5F5",
          100: "#EDEDED",
          200: "#DCDCDC",
          300: "#B5B5B5",
          400: "#8A8A8A",
          500: "#E6C000",
          600: "#4A4A4A",
          700: "#3A3A3A",
          800: "#2B2B2B",
          900: "#1F1F1F",
        },
        lime: { accent: "#FFD600" },
        sun: { 50: "#FFF8CC", 100: "#FFF0A0", 600: "#8A6A00" },
        sky2: { 50: "#EAF4FF", 100: "#D4E8FF", 700: "#1E5FA8" },
        lav: { 50: "#F0EEFF", 100: "#E1DDFF", 700: "#4B3DB0" },
      },
      backgroundImage: {
        "ink-gradient": "linear-gradient(135deg, #1F1F1F 0%, #3F3F3F 100%)",
        "charcoal-gradient": "linear-gradient(135deg, #2B2D2F 0%, #4A4D50 100%)",
      },
      boxShadow: {
        panel: "0 1px 0 rgba(31,31,31,.04), 0 8px 24px -12px rgba(31,31,31,.18)",
      },
    },
  },
  plugins: [],
};
