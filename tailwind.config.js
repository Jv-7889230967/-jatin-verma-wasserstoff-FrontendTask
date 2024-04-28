/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%,100%": { transform: "w-80" },
          "50%": { transform: "w-64" },
        },
        slideinRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0px)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      }, 
      animation: {
        slidein: "slide 0.2s ease-out",
        slideOut: "slide 0.2s ease-in reverse",
        slideinRight: "slideinRight 1.5s ease-in-out infinite",
        slideDown: "slideDown 0.2s ease-out",
        slideUp: "slideUp 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tw-elements/plugin.cjs")
  ],
};
