/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#FAC660",
                secondary: "#2C2C2C",
                foreground: "#202020",
                background: "#F2F2F2",
            },
        },
    },
    plugins: [],
};
