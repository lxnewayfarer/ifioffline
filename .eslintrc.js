module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'require-await': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }],
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': ['error', { "checksVoidReturn": false }],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/camelcase': ['error', { 'properties': 'never' }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-parameter-properties': 'off'
  },
}
