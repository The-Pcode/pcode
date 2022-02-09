module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        100: '#FFF0D3',
        200: '#F6C76E',
        300: '#C2710A',
        400: '#3E2013',
      },
      secondary: {
        code: "#282C34",
        title: "#768099",
        light: "#fff",
      },
      controls: {
        red: "#F5434A",
        yellow: "#FAC41C",
        green: "#31D599"
      },
      themes: {
        beigeFrom: "#F6C76E",
        beigeTo: "#C2710A",
        purpleFrom: "#8F00FF",
        purpleTo: "#00A3FF",
        greenFrom: "#00FFD1",
        greenTo: "#9EFF00",
        blueFrom: "#00A3FF",
        blueTo: "#00E0FF",
      }
    }
  },
  plugins: [],
}