module.exports = {
    root: true,
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true
    },
    rules: {
        "no-console": 0,
        "no-unused-vars": 0
    }
};
