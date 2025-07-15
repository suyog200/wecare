import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // moduleNameMapper: {
  //   "^@/(.*)$": "<rootDir>/$1", // This line tells Jest how to resolve @/ paths
  // },
   moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^node-appwrite(.*)$': '<rootDir>/__mocks__/node-appwrite.js',
    '^node-fetch-native-with-agent$': '<rootDir>/__mocks__/node-fetch.js',
  },
    globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  collectCoverageFrom: [
    "components/**/*.{ts,tsx}",
    "lib/**/*.{ts,tsx}",
    "!**/node_modules/**",
  ],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transformIgnorePatterns: [
    "node_modules/(?!(node-fetch-native-with-agent|node-appwrite|@babel/runtime)/)",
  ],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
