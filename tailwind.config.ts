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
      keyframes: {
        wave: {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(16deg)" },
          "20%": { transform: "rotate(-10deg)" },
          "30%": { transform: "rotate(16deg)" },
          "40%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
        halo: {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "70%, 100%": { transform: "scale(1.7)", opacity: "0" },
        },
      },
      animation: {
        wave: "wave 2.6s ease-in-out infinite",
        "wave-slow": "wave 3.4s ease-in-out infinite",
        halo: "halo 2.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

