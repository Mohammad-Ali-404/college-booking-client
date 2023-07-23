/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true, node:true },
  extends: [
        'eslint:recommended',
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
