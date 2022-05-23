// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// const target = 'http://127.0.0.1:3000'

// module.exports = {
//   devServer: {
//     port: 8000,
//     proxy: {
// 	  // Start point of API sends `Proxy` request
//       '^/api': {
//         target,
//         changeOrigin: true
//       }
// 	  }
//   }
// }

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
  devServer: {
    proxy: {
      '/oauth2.0': {
        target: 'https://nid.naver.com'
      }
    }
  },
}

module.exports = {
  lintOnSave: false
}


