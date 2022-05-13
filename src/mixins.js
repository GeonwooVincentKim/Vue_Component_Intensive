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
