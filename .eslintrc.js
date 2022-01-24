module.exports = {
  babel: {
    env: {
      test: {
        plugins: ["@babel/plugin-transform-modules-commonjs"],
      },
    },
  },
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-debugger": "off",
    "no-console": "off",
  },
};
