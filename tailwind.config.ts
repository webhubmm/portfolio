import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Webhub palette (docs/global.md) */
        primary: {
          DEFAULT: "#182257",
        },
        secondary: {
          DEFAULT: "#354BBD",
        },
        third: {
          DEFAULT: "#435FEF",
        },
        fourth: {
          DEFAULT: "#A3AFEF",
        },
        "text-on-white": "#202957",
        "text-on-dark": "#182257",
        subtitle: "#27378A",
      },
      fontFamily: {
        sans: ["var(--font-tt-travels)", "sans-serif"],
        "main-title": ["var(--font-futura-pt)", "sans-serif"],
        title: ["var(--font-futura-pt)", "sans-serif"],
        subtitle: ["var(--font-futura-pt-cond)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
