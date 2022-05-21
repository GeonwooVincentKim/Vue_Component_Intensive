<template>
    <button type="button" @click="childFunc" ref="btn">자식 Component Data 변경</button>
</template>
<script>
export default {
  data () {
    return {
      msg: '메시지'
    }
  },
  
  methods: {
    childFunc () {
      console.log(this.msg)
      this.msg = '변경 된 메시지'
    }
  }
}
</script>
