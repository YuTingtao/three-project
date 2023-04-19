module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],          // 缩进4个空格
    'vue/html-indent': ['error', 2],
    'semi': ['error', 'never'],                           // js结尾不加分号
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // js定义字符串使用单引号
    'camelcase': 'error',                                 // 驼峰命名
    'comma-dangle': ['error', 'never'],                   // 禁止使用拖尾逗号
    'comma-spacing': ['error', { 'before': false, 'after': true }], // 逗号后面带一个空格
    'comma-style': ['error', 'last'],                     // 逗号放置在当前行末尾
    'func-call-spacing': ['error', 'never'],              // 函数调用时括号前不带空格
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }], // 使用函数声明定义函数
    'max-len': ['error', { 'code': 120, 'tabWidth': 4 }], // 一行最大120长度
    'new-cap': ['error', { 'capIsNew': true }],           // 构造函数名首字母大写
    'spaced-comment': ['error', 'always'],                // 注释斜杠后面加空格
    'object-curly-spacing': ['error', 'always'],          // 对象括号内带空格
    'no-multiple-empty-lines': ['error', { 'max': 2 }],   // 最大2空行
    'no-undef': ['error', { 'typeof': true }],            // 禁用未声明的变量
    'no-unused-vars': 'off',                              // 未使用变量不报错
    'vue/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-deprecated-v-on-native-modifier': 'off'
  }
}
