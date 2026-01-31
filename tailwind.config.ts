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
        background: "var(--background)",
        foreground: "var(--foreground)",
        luxury: {
          dark: "#0a0a0c",
          gold: "#D6AB55", // Premium Gold
          green: "#033120", // Deep Royal Green
          red: "#E63946", // Urgency/CTA color
          purple: "#4a1a4a",
          "purple-light": "#6b2a6b",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        opensans: ["var(--font-opensans)", "sans-serif"],
      },
      backgroundImage: {
        "luxury-gradient": "radial-gradient(circle at center, #1a1a2e 0%, #0a0a0c 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
