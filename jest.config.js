module.exports = {
    preset: 'ts-jest',
    //testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testEnvironment : "jsdom",
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};