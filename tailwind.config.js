/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-900": "#fff",
        "gray-500": "#556987",
        darkolivegreen: "#185013",
        "gray-900": "#2a3342",
        "primary-100": "#dcfce7",
        "gray-200": "#d5dae1",
        "primary-050": "#f0fdf4",
        "gray-400": "#8896ab",
        "gray-800": "#333f51",
        "gray-5001": "#667085",
        "gray-050": "#f7f8f9",
        gainsboro: "#d9d9d9",
        "primary-500": "#22c55e",
        "secondary-500": "#a855f7",
        "secondary-050": "#fbf7ff",
      },
      spacing: {},
      fontFamily: {
        "text-md-medium": "Poppins",
      },
      borderRadius: {
        "17xl": "36px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      xs: "12px",
      "41xl": "60px",
      "5xl": "24px",
      "17xl": "36px",
      lg: "18px",
      sm: "14px",
      "11xl": "30px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
