/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 2s ease-out",
      },
      colors: {
        "black-100": "#000000",
        "black-20": "rgba(0, 0, 0, 0.2)",
        "black-50": "rgba(0, 0, 0, 0.5)",
        "black-75": "rgba(0, 0, 0, 0.75)",
        "red-500": "#981010",
        "red-300": "#e76f6f",
        "red-400": "#a23a3a",
        "pink-100": "#f2c9c9",
        "pink-300": "#f2caca",
        "gray-900": "#100f0f",
        "gray-800": "#2b0303",
        custom: "#1f0200",
        "gray-700": "#333333",
        "gray-600": "#3a414b",
        "white-100": "#ffffff",
        "white-30": "rgba(255, 255, 255, 0.3)",
        "white-40": "rgba(255, 255, 255, 0.4)",
        "white-60": "rgba(255, 255, 255, 0.6)",
        "white-70": "rgba(255, 255, 255, 0.7)",
        "white-90": "rgba(255, 255, 255, 0.9)",
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio"],
};
