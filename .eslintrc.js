module.exports = {
  root: true,
  parserOptions: {
    // parser为指定解析器
    parser: 'babel-eslint',
    //sourceType - 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    worker: true,
    jest: true
  },
  // recommended规则是eslint核心配置(最严格的),推荐的
  // extends: ['plugin:vue/recommended', 'eslint:recommended'],
  // essential规则是eslint核心配置(宽松的)
  // extends: ['plugin:vue/essential', 'eslint:recommended']
  //prettier规则的"@vue/prettier",
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never'],
    //禁止出现未使用过的变量
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    // 使用v-html指令可能导致XSS攻击
    'vue/no-v-html': 'off',
    'no-useless-escape': 0
  }
}
