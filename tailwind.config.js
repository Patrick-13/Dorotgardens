/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orchid: "#c178b4", // you can name it whatever you like
        orchidhover: "#8f2074",
        orchiddark: "#6d1a5d",
        orchidbutton: "#70005a",
        parsley: "#81ac3f",
        basil: "#bf2125",
        poorblue: "#5ebbb0",
        glaizedchicken: "#ebab1f",
        turmeric: "#3b9dc9",
        crushgarlic: "#bf4e9d",
        onions: "#e16184",
        ultraviolet: "#cc4aa7",
        lichepurple: "#760565"
      },
    },
  },
  plugins: [],
}

