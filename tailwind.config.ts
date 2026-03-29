import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        ink: "#111111",
        burgundy: "#8B1A2B",
        blush: "#F7ECEE",
        muted: "#717580",
        slate: "#3D4A5C",
        border: "rgba(17,17,17,0.1)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 16px rgba(0,0,0,0.09), 0 2px 6px rgba(0,0,0,0.05)",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
