import type { Config } from '@jest/types';

export default <Config.InitialOptions>{
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/*/.{ts, tsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/build/',
    '<rootDir>/src/models/',
    '<rootDir>/src/mocks/',
    '<rootDir>/src/testUtils/',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 40,
    },
  },
  coverageReporters: ['html', 'text', 'json', 'text-summary'],
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  verbose: true,
};
