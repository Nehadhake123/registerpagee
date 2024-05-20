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
        white: "#fff",
        "taittle-color": "#142653",
        gray: "rgba(255, 255, 255, 0.15)",
        orange: {
          "100": "rgba(255, 163, 43, 0.4)",
          "200": "rgba(255, 163, 43, 0.2)",
        },
        "primery-color": "#ffa32b",
        chocolate: "#cc7000",
        "paragraph-font-color": "#4f5b78",
        midnightblue: {
          "100": "rgba(11, 41, 114, 0.05)",
          "200": "rgba(11, 41, 114, 0.1)",
        },
        
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
      },
      borderRadius: {
        "11xl": "30px",
        xl: "20px",
        "18xl": "37px",
        "19xl": "38px",
        "23xl": "42px",
        "15xl": "34px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      sm: "14px",
      xl: "20px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
