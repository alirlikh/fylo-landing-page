/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "*.html"],
  theme: {
    extend: {
      colors: {
        darkMirage: "rgb(28, 36, 49)",
        mirage: "rgb(24, 31, 43)",
        ebonyClay: "rgb(32, 42, 60)",
        darkBlue2: "hsl(216, 53%, 9%)",
        turquoiseBlue: "rgb(101, 226, 217)",
      },
      backgroundImage: (theme) => ({
        "logo-dark-mode": "url('../images/logo-dark-mode.svg')",
        "logo-light-mode": "url('../images/logo-light-mode.svg')",
        "curvy-dark-mode": "url('../images/bg-curvy-dark-mode.svg')",
        "curvy-light-mode": "url('../images/bg-curvy-light-mode.svg')",
      }),
      fontFamily: {
        sans: ["Open Sans", "Raleway"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
