import { defineConfig } from 'eslint/config';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ElMessage: 'readonly',
        ElMessageBox: 'readonly',
        ElLoading: 'readonly'
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    rules: {
      // 缩进2个空格
      indent: ['error', 2, { SwitchCase: 1 }],
      // 结尾加分号
      semi: ['error', 'always'],
      // 字符串使用单引号
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      // 驼峰命名
      camelcase: 'error',
      // 一行最大160长度
      'max-len': ['error', { code: 120, tabWidth: 2 }],
      // 多行允许使用末尾逗号
      'comma-dangle': ['error', 'only-multiline'],
      // 逗号后面带一个空格
      'comma-spacing': ['error', { before: false, after: true }],
      // 逗号放置在当前行末尾
      'comma-style': ['error', 'last'],
      // 函数调用时括号前不带空格
      'func-call-spacing': ['error', 'never'],
      // 使用函数声明定义函数
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      // 构造函数
      'new-cap': ['error', { capIsNew: false }],
      // 注释斜杠后面加空格
      'spaced-comment': ['error', 'always'],
      // 对象括号内带空格
      'object-curly-spacing': ['error', 'always'],
      // 最大2空行
      'no-multiple-empty-lines': ['error', { max: 2 }],
      // 禁用未声明的变量
      'no-undef': ['error', { typeof: true }],
      // 未使用变量
      'no-unused-vars': ['warn', { vars: 'all', args: 'none', varsIgnorePattern: '^_' }],
      // ts未使用变量
      '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'none', varsIgnorePattern: '^_' }],
      // 禁止在对象上调用 Object.prototype 方法
      'no-prototype-builtins': 'error',
      // console
      'no-console': 'warn',
      // ts禁止使用 any
      '@typescript-eslint/no-explicit-any': 'warn',
      // ts禁止使用 require
      '@typescript-eslint/no-var-requires': 'warn',
      // vue缩进2个空格
      'vue/html-indent': ['error', 2, { alignAttributesVertically: false }],
      // vue组件命名
      'vue/multi-word-component-names': ['error', { ignores: ['index'] }],
      // vue未使用变量
      'vue/no-unused-vars': ['warn', { ignorePattern: '^_' }]
    }
  },
  {
    ignores: ['node_modules/', 'dist/', 'docs/']
  }
]);
