const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontSize: {
        "9xl": ["8.5rem", "1"],
      },
      fontWeight: {
        black: 900,
        bold: 700,
        medium: 500,
        normal: 400,
        light: 300,
      },
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
      },
    },
  },

  plugins: [],
};

module.exports = config;
