/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',        // Look for classes in all HTML files in the root directory
    './src/**/*.html', // If you have HTML files inside a `src` folder or any subfolder
    './src/**/*.js',   // If you have JS files where Tailwind classes might be used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
