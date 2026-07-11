module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "airbnb", "prettier"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "react-hooks", "prettier"],
    rules: {
        // "prettier/prettier": "off",
        "prettier/prettier": "error",
        "react/jsx-filename-extension": 0,
        "import/prefer-default-export": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        // Adicione estas regras
        "react/state-in-constructor": "off",
        "class-methods-use-this": "off",
        "react/no-unused-state": "off",
        "react/forbid-prop-types": 0,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
