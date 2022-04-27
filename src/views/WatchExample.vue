<template>
    <div>
        <p>Original Message : "{{ message }}"</p>
        <p>Reversed Message : "{{ reversedMessage }}"</p>
    </div>
</template>
<script>
export default {
  name: 'WatchExample',
  data () {
    return {
      message: 'Hello',
      reversedMessage: ''
    }
  },
  // Watch changed
  watch: {
    message: function (newVal, oldVal) {
      this.reversedMessage = newVal.split('').reverse().join('')
    }
  }
}
</script>
