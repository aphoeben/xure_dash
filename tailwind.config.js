/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "sidebar-color":"#1F1925",
        "icon-color":"#7F6994",
        "button":"#F7D091",
        "page-color":"#251E2B",
        "purple":"#2F223B",
        "focus-color": "#473E23",
        "darkpurp": "#4F3366",
        "searchcolor" : "#1F1925",
        "purplight" : "#BCA8CF",
        "gradpurp" : "#531B8A",
        "gradblk" : "#1F1925",
        "gradvia" : "#27044A",
        "contpurp" : "#632AAD",
        "contgreen" : "#C1C341",
        "contblue" : "#1D79CF",
        "contgrn" : "#1DCD77"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
}

