module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["prettier", "react", "react-hooks", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".css", ".js", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "arrow-body-style": "off",
    "prettier/prettier": "error",
    "react/function-component-definition": "off",
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
  },
};
