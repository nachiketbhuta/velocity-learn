module.exports = {
  purge: [],
  theme: {
    extend: {},
    screens: {
      mobile: "0px",
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
    },
  },
  variants: {
    fontSize: ["responsive", "hover", "focus"],
    borderColor: ["responsive", "hover", "focus", "active", "group-hover"],
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
