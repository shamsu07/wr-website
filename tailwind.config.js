/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        darkGunmetal: "#09161C", //Background black
        spiroDiscoBall: "#1CC7F4", //Used in the title(eg. Contact US)
        bondiBlue: "#009CC5", //Used for container background
        blueSapphire: "#0A5F75", //Used for the footer
        opal: "#9CBEC8", //Used for texts in the footer
        formBlack: "#1A2A30",
        maastrichtBlue: "#072E3A",
        linkedinBlue: "#0077B5",
        twitterBlue: "#1DA1F2",
        facebookBlue: "#1877F2",
        instagramPink: "#D62976",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
});
