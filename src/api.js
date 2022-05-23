import axios from 'axios'

export default {
  mounted () {
    console.log('Mixins Mounted')
  },

  unmounted () {
    console.log('Mixins Unmounted')
  },

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
