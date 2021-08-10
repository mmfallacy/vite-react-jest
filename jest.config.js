module.exports = {
    roots: ["<rootDir>/src"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    testMatch: [
        "<rootDir>/src/**/__tests__/**/*.{js,jsx}",
        "<rootDir>/src/**/*.{spec,test}.{js,jsx}",
    ],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    ],
};
