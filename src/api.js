import axios from 'axios'

export default {
  methods: {
    async $callAPI(url, method, data) {
      return (await axios ({
        method: method,
        url,
        data
      }).cache(e => {
        console.log(e)
      })).data
    }
  }
}
