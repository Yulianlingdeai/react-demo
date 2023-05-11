module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        // "prettier/@typescript-eslint",
        "react-app",
        "react-app/jest",
        "plugin:prettier/recommended"
    ],
    plugins: ["prettier", "react"],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", "tsx"] }],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
        // "@typescript-eslint/no-explicit-any": ["off"],
        // "@typescript-eslint/no-var-requires": 0,
        // "vue/multi-word-component-names": "off",
        // "@typescript-eslint/no-this-alias": [
        //     "error",
        //     {
        //         allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        //         allowedNames: ["target"] // Allow `const self = this`; `[]` by default
        //     }
        // ]
    }
};
