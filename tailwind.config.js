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
        purpleFrom: "#6367F8",
        purpleTo: "#FF9491",
        greenFrom: "#59E4B2",
        greenTo: "#68B1C8",
        blueFrom: "#0070F3",
        blueTo: "#61DAFB",
      }
    }
  },
  plugins: [],
}