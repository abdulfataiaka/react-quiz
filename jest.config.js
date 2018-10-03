module.exports = {
  setupFiles: [
    '<rootDir>/enzyme.config.js',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
  ],
  moduleNameMapper: {
    '.scss$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
};
