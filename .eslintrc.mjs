// .eslintrc.mjs
export default {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "tailwindcss"],
  rules: {
    // Customize your ESLint rules here
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-contradicting-classname": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
