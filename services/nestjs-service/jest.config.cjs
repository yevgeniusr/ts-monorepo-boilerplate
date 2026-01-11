module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverageFrom: [
    '**/*.(t|j)s'
  ],
  coverageDirectory: '../coverage',
  moduleNameMapping: {
    '^@ts-monorepo-boilerplate/common$': '<rootDir>/../../../packages/shared-package/src/index.ts',
    '^@ts-monorepo-boilerplate/common/(.*)$': '<rootDir>/../../../packages/shared-package/src/$1'
  }
};
