module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  semi: true,
  arrowParens: 'always',
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  // pnpm doesn't support plugin autoloading
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
  plugins: ['prettier-plugin-tailwindcss'],
};
