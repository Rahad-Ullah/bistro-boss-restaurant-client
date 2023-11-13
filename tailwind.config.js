/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#BB8506",

          secondary: "#D99904",

          accent: "#D1A054",

          neutral: "#111827",

          "base-100": "#ffffff",
          "base-200": "#F3F3F3",
          "base-300": "#E8E8E8",

          info: "#ffffff",

          success: "#15151599",

          warning: "#EEFF25",

          error: "#ffffff",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
