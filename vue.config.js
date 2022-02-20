const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: 'src/pages/index/main.js',
    'stats/index' : 'src/pages/stats/main.js',
  },
  publicPath: '/319-boys/',
  chainWebpack: (config) => config.optimization.minimize(false),
  transpileDependencies: true
})
