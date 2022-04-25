<template>
  <div></div>
</template>
<script>
export default {
  data () {
    return {
      msg: '자식 Component 로부터 보내는 Message'
    }
  },
  mounted () {
    this.$emit('send-message', this.msg)
  }
}
</script>
