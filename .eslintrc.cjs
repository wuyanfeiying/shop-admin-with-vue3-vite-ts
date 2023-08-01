/*
 * @Date: 2023-07-31 21:32:01
 * @LastEditors: wuyanfeiying
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-mutating-props': 'off'
  },
  overrides: [
    {
      files: ['src/api/**/*.ts'],
      rules: {
        camelcase: 'off'
      }
    }
  ]
}
