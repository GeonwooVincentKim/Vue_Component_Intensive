<template>
  <input type="text" v-focus />
</template>
<script>
export default {
  directives: {
    focus: {
      mounted (el) {
        el.focus()
      }
    },
    pin: {
      mounted (el, binding) {
        el.style.position = 'fixed'
        el.style.top = binding.value.top + 'px'
        el.style.left = binding.value.left + 'px'
      }
    }
  },
  data () {
    return {
      position: { top: 50, left: 100 }
    }
  }
}
</script>
