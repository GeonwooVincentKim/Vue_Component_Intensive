import axios from 'axios'

export default {
  mounted () {
    console.log('Mixins Mounted')
  },

  unmounted () {
    console.log('Mixins Unmounted')
  },

  methods: {
    async $api (url, method, data) {
      return (await axios({
        method: method,
        url,
        data
      }).catch(e => {
        console.log(e)
      })).data
    }
  }
}

axios.defaults.baseURL = 'http://localhost:3000'  // Server Address
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
