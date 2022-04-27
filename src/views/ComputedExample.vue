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
      message: 'Hello'
    }
  },
  // Responsive Getter
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
