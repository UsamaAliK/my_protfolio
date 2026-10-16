import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: "#FAF9F6",
          card: "#FFFFFF",
          muted: "#F1F0EB",
        },
        border: {
          light: "#E4E4DC",
          subtle: "#F0F0EB",
        },
        text: {
          main: "#222923",
          muted: "#59645D",
          subtle: "#818980",
        },
        accent: {
          DEFAULT: "#38685A", // forest green
          hover: "#2D5549",
          light: "#E6F0E8",
          border: "#B8CFBE",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "Fira Code",
          "Menlo",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

