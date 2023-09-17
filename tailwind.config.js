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
        "text-primary": "#1A1B1F",
        "text-secondary": "rgba(26, 27, 31, 0.60)",
        "border-stroke": "rgba(26, 27, 31, 0.08)",
        "blue-card": "#D3E1EB",
        "gray-new": "#F7F7F9",
      },
      lineHeight: {
        heading: "120%",
        body: "150%",
      },
      boxShadow: {
        "nav-shadow": "0px 10px 10px -5px rgba(0, 0, 0, 0.1);",
        "main-inner-shadow":
          "0px 0px 0px 1px rgba(252, 252, 252, 0.32),0px 2px 4px 0px rgba(0, 0, 0, 0.16) inset; 0px 1px 1px 0px rgba(0, 0, 0, 0.12) inset;",
      },
    },
  },
  plugins: [],
};
