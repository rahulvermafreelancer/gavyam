module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      "light":["light","sans-serif","system-ui"],
      "regular":["regular","sans-serif","system-ui"],
    },
    extend: {
      colors:{
        "earth":"#1F2D16",
        "green":"#545E46",
        "soil":"#B55219",
        "brown":"#BE6731",
        "gray":"#E1E4E0",
        "white":"#FFFFFF"
      },
    },
  },
  plugins: [],
}