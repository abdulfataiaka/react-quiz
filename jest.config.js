module.exports = {
  setupFiles: [
    "<rootDir>/enzyme.config.js"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/index.js",
    "!src/helpers/*.js"
  ],
  coverageDirectory: "coverage"
}
