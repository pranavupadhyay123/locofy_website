/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1b2025",
          "200": "#0d0d0d",
          "300": "#000212",
          "400": "rgba(255, 255, 255, 0.2)",
        },
        white: "#fff",
        orangered: "#ff6e1a",
        crimson: "#e63946",
        black: "#000",
        mediumseagreen: "#08ba64",
        yellow: "#ffff00",
        whitesmoke: "#f4f3ee",
        darkslategray: "rgba(56, 56, 56, 0.5)",
      },
      spacing: {},
      fontFamily: {
        font: "font",
      },
      borderRadius: {
        "21xl": "40px",
        "11xl": "30px",
        "2xs": "11px",
        "25xl": "44px",
      },
    },
    fontSize: {
      "5xl": "24px",
      xl: "20px",
      "29xl": "48px",
      "17xl": "36px",
      base: "16px",
      "13xl": "32px",
      "37xl": "56px",
      lg: "18px",
      "3xl": "22px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
