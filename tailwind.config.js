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
        'primary': "#e8b445",
        'secondary': "#e2a085",
        'accent': "#ef0462",
        'neutral': "#372a37",
        "base-100": "#ededed",
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
