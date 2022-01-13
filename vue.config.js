const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    productionSourceMap: false,
    chainWebpack(config) {
        config.resolve.alias.set('@', resolve('src'))
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/scss/base/variable.scss";`
            }
        }
    },
    transpileDependencies: [],
    devServer: {
        disableHostCheck: true,
        port: 8080,
        open: true
    }
}