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
          light: "#FBFBF9",
          card: "#FFFFFF",
          muted: "#F4F4F0",
        },
        border: {
          light: "#E8E8E4",
          subtle: "#F0F0EB",
        },
        text: {
          main: "#111827",
          muted: "#6B7280",
          subtle: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#0D9488", // muted teal
          hover: "#0F766E",
          light: "#CCFBF1",
          border: "#99F6E4",
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

