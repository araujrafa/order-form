process.on('unhandledRejection', reason => reason);

module.exports = {
  browser: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverageFrom: [
    '**/resources/js/**/*.js',
    '!**/node_modules/**',
  ],
  roots: ['resources/js'],
  bail: true,
};
