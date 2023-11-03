/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        'primary': "#77529a",
        'secondary': "#faf3f3",
        'accent': "#e7e4e4",
        'neutral': "#2e3034",
        "base-100": "#27292d",
        "base-200": "#7c569f",
        "base-300": "#aba1c2",
        'info': "#3b68c9",
        'success': "#41e6a4",
        'warning': "#dca409",
        'error': "#e23d28",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
