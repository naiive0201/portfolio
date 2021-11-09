module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'react/prop-types': 'off',
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'off',
  },
};
