import axios from 'axios'

export default {
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

// axios.defaults.baseURL = 'http://nid.naver.com' // Server Address
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
