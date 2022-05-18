const { defineConfig } = require('@vue/cli-service')
const { apply } = require('core-js/fn/reflect')
module.exports = defineConfig({
  transpileDependencies: true
})

const target = 'http://127.0.0.1:3000'

module.exports = {
  devServer: {
    port: 8000,
    proxy: {
	  // Start point of API sends `Proxy` request
      '^/api': {
        target,
		changeOrigin: true
	  }
	}
  }
}

const cors = require('cors')

let corsOption = {
  origin: 'http://localhost:8080',
  credentials: true // Add set contents into the response header if is true
}

app.use(cors(corsOption))
