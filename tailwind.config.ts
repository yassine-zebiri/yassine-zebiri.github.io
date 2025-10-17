import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // مجلد App Router
    "./src/pages/**/*.{js,ts,jsx,tsx}", // في حال لديك Pages
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050e20",
      },
    },
  },
  plugins: [],
};

export default config;
