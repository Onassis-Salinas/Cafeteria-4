/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#FAC660",
                secondary: "#B7B7B7",
                foreground: "#202020",
                background: "#F2F2F2",
            },
        },
    },
    plugins: [],
};
