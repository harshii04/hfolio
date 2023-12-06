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
        white: "#FFFFFF",
        "text-primary": "#4f4f4f",
        "text-secondary": "#a5a5a5",
        "border-stroke": "rgba(225, 228, 233, 0.8)",
        "blue-card": "#D3E1EB",
        "orange-card": "#EBDED3",
        "purple-card": "#D3DFEB",
        "green-card": "#D3EBD8",
        "gray-new": "#F7F7F9",
        "purple-text": "#6D28D9",
        "tag-fill": "#EDE9FE",
        "tag-stroke": "#DDD6FE",
        "heading-yellow": "#FFDE6A",
        "heading-green": "#14D87A",
        "hover-text": "#8a8a8a",
      },
      lineHeight: {
        heading: "120%",
        "mobile-heading": "130%",
        body: "150%",
      },
      letterSpacing: {
        "tight-2": "-0.09rem",
        "light-2": "0.09rem",
      },
      boxShadow: {
        "nav-shadow": "0px 10px 10px -5px rgba(0, 0, 0, 0.1);",
        "main-inner-shadow": `
          0px 0px 0px 1px rgba(252, 252, 252, 0.32),
          0px 2px 4px 0px rgba(0, 0, 0, 0.16) inset,
           0px 1px 1px 0px rgba(0, 0, 0, 0.12) inset;
          `,
        imgShadow:
          "0px 2px 4px 0px rgba(0, 0, 0, 0.08), 1px 8px 8px 0px rgba(0, 0, 0, 0.07), 2px 17px 10px 0px rgba(0, 0, 0, 0.04), 3px 30px 12px 0px rgba(0, 0, 0, 0.01), 4px 47px 13px 0px rgba(0, 0, 0, 0.00)",
      },
    },
  },
  plugins: [],
};
