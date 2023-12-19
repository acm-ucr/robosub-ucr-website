/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        robosub: {
          red: "#FF3100",
          orange: "#FF7738",
          yellow: "#F19228",
        },
      },
      fontFamily: {
        jost: "var(--jost-font)",
      },
    },
  },
  plugins: [],
};
