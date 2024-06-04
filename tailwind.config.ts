import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
  prefix: "",
  theme: {
    container: {
      // from shadcn
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: {
          // https://www.color-hex.com/color-names.html
          DEFAULT: "#EBEBEB", // Gray92
          light: "#F2F2F2", // Gray95
        },
        accent: {
          400: "#DEDEDE",
          500: "#ACAAA8",
          600: "#767676",
        },
        highlight: {
          DEFAULT: "#a8e0e4",
          dark: "#bce6e8",
        },
        dark: "#222222",
      },
      fontFamily: {
        serif: ["EB Garamond", "serif"],
        sans: ["Arial", "sans-serif"],
      },
      // from shadcn
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
