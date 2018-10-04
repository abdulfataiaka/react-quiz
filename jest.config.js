module.exports = {
  setupFiles: [
    '<rootDir>/enzyme.config.js',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
  ],
  moduleNameMapper: {
    'questions.json': '<rootDir>/src/tests/__mocks__/questions.json',
    '.scss$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
};
