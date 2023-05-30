const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          50: "#E0FAFF",
          100: "#C2F6FF",
          200: "#85EDFF",
          300: "#47E3FF",
          400: "#0ADAFF",
          DEFAULT: "#00AECD",
          600: "#008BA3",
          700: "#00687A",
          800: "#004552",
          900: "#002329",
          950: "#001114"
        },
        "secondary": {
          50: "#E8F9FC",
          100: "#D6F5FA",
          200: "#A9EAF4",
          300: "#81E0EF",
          400: "#54D5E9",
          DEFAULT: "#29C9E3",
          600: "#19A7BD",
          700: "#138090",
          800: "#0C545F",
          900: "#062C32",
          950: "#031417"
        },
        "tertiary": "#29C9E3",
        "sand": "#FFE19D",
        "sand-dark": "#E8A360",
      },
    },
  },
})

