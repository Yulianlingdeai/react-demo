module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "react-app",
        "react-app/jest",
        "plugin:prettier/recommended"
        // "prettier"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
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
