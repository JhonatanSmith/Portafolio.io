import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#08111F",
        text: "#E5EEFB",
        muted: "#9FB0C7",
        line: "rgba(148, 163, 184, 0.18)",
        accent: "#60A5FA",
        "accent-strong": "#818CF8",
        "accent-2": "#22D3EE",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(8, 17, 31, 0.42)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
