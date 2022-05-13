<template>
    <div></div>
</template>
<script>
import ApiMixin from '../api.js'

export default {
  mixins: [ApiMixin], // Add Mixin File to use into the Array
  data () {
    return {
      productList: []
    }
  },
  async mounted () {
    this.productList = await this.$callAPI("https://ada1e106-f1b6-4ff2-be04-e311ecba599d.mock.pstmn.io/list", "get")
    console.log(this.productList)
  }
}
</script>
