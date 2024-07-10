/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#CEF6FF",
        brown: "#633929",
        darkpink: "#D76B73",
        lightpink: "#F7E1E3",
      },
      fontFamily: {
        display: '"Concert One"',
        sans: "Inter Tight",
      },
    },
  },
  plugins: [],
};
