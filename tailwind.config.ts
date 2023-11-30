module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
      "./node_modules/flowbite/**/*.{js,ts}"
    ],
    plugins: [
      require('daisyui'),
      require('flowbite/plugin')
    ],
}