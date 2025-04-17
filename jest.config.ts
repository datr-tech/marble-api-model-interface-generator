export default {
  coveragePathIgnorePatterns: [
		'<rootDir>/.jest',
		'<rootDir>/test/fixtures'
	],
  coverageReporters: [
		'lcov',
		'json-summary'
	],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
    '@appTest/(.*)': '<rootDir>/test/$1',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: [
		'<rootDir>/.jest/setupPaths.ts'
	],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/.github/',
    '<rootDir>/.husky/',
    '<rootDir>/node_modules/',
  ],
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
};
