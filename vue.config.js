const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'docs',
  transpileDependencies: [],
  productionSourceMap: false,
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src'))
    // 打包分析
    if (process.env.NODE_ENV === 'production') {
      config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/base/variable.scss";`,
      },
    },
  },
  devServer: {
    disableHostCheck: true,
    port: 8080,
    open: true,
  },
}
