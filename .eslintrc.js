module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:vue/vue3-recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'require-default-prop': 0,
  },
};
