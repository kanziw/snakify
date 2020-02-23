module.exports = {
  extends: 'eslint:recommended',
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'jest',
  ],
  rules: {
    semi: [ 'error', 'never' ],
    'max-len': [ 'error', { code: 120, ignoreUrls: true } ],
    'key-spacing': [ 'error', { afterColon: true, beforeColon: false } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'comma-dangle': [ 'error', 'always-multiline' ],
  },
}
