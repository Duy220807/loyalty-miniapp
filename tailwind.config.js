let defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('taro-tailwind'),
    // ...
  ],
  purge: [
    "./src/**/*.js",
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
    "./src/**/*.wxml",
  ],
  corePlugins: {},
  variants: {},
  theme: {},
};
