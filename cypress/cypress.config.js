const defineConfig = require("cypress")

module.exports = {
  e2e: {
    setupNodeEvents() { },
    baseUrl: "http://react:5173"
  },
}