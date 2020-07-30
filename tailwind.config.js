const defaultSans = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const defaultSerif = [
  "Georgia",
  "Cambria",
  '"Times New Roman"',
  "Times",
  "serif",
];

module.exports = {
  purge: ["./**/{pages,components,tailwind}/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        "neon-orange": "#f92300",
      },
      fontSize: {
        "7xl": "4.5rem",
      },
      spacing: {
        "14": "3.375rem",
      },
    },
    fontFamily: {
      display: ["Open Sans", ...defaultSans],
      body: ["Merriweather", ...defaultSerif],
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme("colors.gray.900"),
          blockquote: {
            borderLeftColor: theme("colors.gray.700"),
          },
          "ol > li::before": {
            color: theme("colors.gray.700"),
          },
          "ul > li::before": {
            backgroundColor: theme("colors.gray.700"),
          },
          a: {
            color: "#f92300",
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
