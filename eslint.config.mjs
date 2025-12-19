import uniHelper from '@uni-helper/eslint-config'

export default uniHelper({
  unocss: true,
  vue: true,
  markdown: false,
  ignores: [
    // 忽略uni_modules目录
    '**/uni_modules/',
    // 忽略原生插件目录
    '**/nativeplugins/',
    'dist',
    'types/',
    // 插件生成的文件
    'src/pages.json',
    'src/manifest.json',
    // 忽略自动生成文件
    'src/service/**',
  ],
  // https://eslint-config.antfu.me/rules
  rules: {
    // js
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-useless-return': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-vars': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    // jsdoc
    'jsdoc/check-param-names': 'off',
    'jsdoc/require-returns-description': 'off',
    'no-extend-native': 'off',
    // vue
    'vue/no-unused-refs': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 5,
        multiline: 1,
      },
    ],
    'vue/attribute-hyphenation': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/script-setup-uses-vars': 2,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-mutating-props': 0,
    'vue/custom-event-name-casing': 0,
    'vue/attributes-order': 0,
    'vue/one-component-per-file': 0,
    'vue/require-default-prop': 0,
    'vue/require-explicit-emits': 0,
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'always',
          // normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // vue SFC 调换顺序改这里
    'vue/block-order': ['error', {
      order: [['template'], 'script', 'style'],
    }],
    // ts
    'ts/no-empty-object-type': 'off',
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
  },
})
