import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,ts,jsx,tsx}',
    '!<rootDir>/**/*.test.{js,ts,jsx,tsx}',
    '!<rootDir>/**/index.{js,ts}',
    '!<rootDir>/**/*.d.{js,ts}',
    '!<rootDir>/coverage/**/*',
    '!<rootDir>/mocks/**/*',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/$1',
  },
  testRegex: '.(test|spec)\\.(t|j)s$',
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '\\.[jt]sx?$': '@swc/jest',
  },
  resetMocks: true,
  rootDir: './src',
  setupFiles: ['<rootDir>/test/jest.setup.ts'],
};

export default config;
