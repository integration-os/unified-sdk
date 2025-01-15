module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testMatch: ['**/tests/**/*.spec.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};