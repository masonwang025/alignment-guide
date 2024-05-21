import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
    theme: {
        extend: {
            colors: {
                background: '#EBEBEB',
                accent: {
                    main: '#ACAAA8',
                    text: '#767676'
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
