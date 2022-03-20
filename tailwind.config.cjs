const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        header: "url('/src/lib/assets/sacred-heart-college-01.jpg')",
      },
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

  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
  },
};

module.exports = config;
