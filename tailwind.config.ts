import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FAFAFA",
        muted: "#888888",
      },
      fontSize: {
        hero: "clamp(2.5rem, 6vw, 4.5rem)",
      },
    },
  },
  plugins: [],
};

export default config;
