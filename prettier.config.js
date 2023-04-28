module.exports = {
  singleQuote: true,
  arrowParens: "always",
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  // pnpm doesn't support plugin autoloading
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
  plugins: [require("prettier-plugin-tailwindcss")],
};
