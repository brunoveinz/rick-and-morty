import type { Config } from "tailwindcss";
import colors from './src/constants/colors.js';


const config: Config = {
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
        portalGreen: colors.portalGreen,
        rickBlue: colors.rickBlue,
        mortyOrange: colors.mortyOrange,
        alienPurple: colors.alienPurple,
        spaceGray: colors.spaceGray

      },
    },
  },
  plugins: [],
};
export default config;


