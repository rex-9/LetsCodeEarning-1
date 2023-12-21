/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      neutral: {
        100: '#fff',
      },
      primary: {
        100: "#F6CCF5",
        200: "#F0AAEE",
        300: "#E980E5",
        400: "#E255DC",
        500: "#DA2BD4",
        600: "#D300CB",
        700: "#B000A9",
        800: "#8D0087",
        900: "#6A0066",
        1000: "#460044",
        1100: "#2A0029",
      },
      secondary: {
        100: "#CDD7E3",
        200: "#ABBDD0",
        300: "#819CB8",
        400: "#577BA0",
        500: "#2D5A89",
        600: "#033971",
        700: "#03305E",
        800: "#02264B",
        900: "#021D39",
        1000: "#011326",
        1100: "#010B17",
      },
    },
    fontFamily: {
      SchadowBT: "Schadow BT, sans-serif",
      NunitoSans: "Nunito Sans, sans-serif",
    },
    fontSize: {
      "header-6": [
        "3rem",
        {
          lineHeight: "normal",
          letterSpacing: "0.08969rem",
        },
      ],
      "header-5": [
        "2.4375rem",
        {
          lineHeight: "normal",
          letterSpacing: "0.06069rem",
        },
      ],
      "header-4": [
        "2.125rem",
        {
          lineHeight: "normal",
          letterSpacing: "0.04419rem",
        },
      ],
      "header-3": [
        "1.8125rem",
        {
          lineHeight: "normal",
          letterSpacing: "0.03138rem",
        },
      ],
      "header-2": [
        "1.5rem",
        {
          lineHeight: "normal",
          letterSpacing: "0.02163rem",
        },
      ],
      "header-1": [
        "1.25rem",
        {
          lineHeight: "normal",
          letterSpacing: "0.015rem",
        },
      ],
      medium: [
        "1.0625rem",
        {
          lineHeight: "normal",
          letterSpacing: "0.01063rem",
        },
      ],
      "body-text-1": [
        "0.875rem",
        {
          lineHeight: "normal",
          letterSpacing: "0.00788rem",
        },
      ],
      "body-text-2": [
        "0.75rem",
        {
          lineHeight: "normal",
          letterSpacing: "0.00525rem",
        },
      ],
      "small-text": [
        "0.625rem",
        {
          lineHeight: "normal",
          letterSpacing: "0.00363rem",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
