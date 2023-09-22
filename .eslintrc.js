module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier", "react", "react-hooks"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "arrow-body-style": "off",
    "prettier/prettier": "error",
    "react/function-component-definition": "off",
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
  },
};
