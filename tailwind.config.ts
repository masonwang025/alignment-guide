import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
    theme: {
        extend: {
            colors: {
                background: '#EBEBEB',
                accent: {
                    400: '#DEDEDE',
                    500: '#ACAAA8',
                    600: '#767676'
                },
                dark: '#222222',
            },
            fontFamily: {
                serif: ['EB Garamond', 'serif'],
                sans: ['Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
