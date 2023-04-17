module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next'],
  plugins: ['@typescript-eslint'],
  rules: {
    
  },
};
