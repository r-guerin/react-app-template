import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,ts,jsx,tsx}',
    '!<rootDir>/**/*.test.{js,ts,jsx,tsx}',
    '!<rootDir>/**/*.d.{js,ts}',
    '!<rootDir>/**/index.{js,ts}',
    '!<rootDir>/coverage/**/*',
    '!<rootDir>/mocks/**/*',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/$1',
  },
  testRegex: '.(test|spec)\\.[jt]sx?$',
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': '@swc/jest',
  },
  resetMocks: true,
  rootDir: './src',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
};

export default config;
