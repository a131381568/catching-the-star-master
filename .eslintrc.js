module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    es6: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    // "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "plugin:security/recommended",
    "prettier",
    "./.eslintrc-auto-import.json",
  ],
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false,
    },
  },
  // plugins: ["vue", "@typescript-eslint/parser"],
  plugins: ["@typescript-eslint", "import", "vue"],
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "no-unused-vars": [0],
    "no-var": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "comma-dangle": ["error", "only-multiline"],
    "@typescript-eslint/explicit-modult-boundary-types": "off",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
};