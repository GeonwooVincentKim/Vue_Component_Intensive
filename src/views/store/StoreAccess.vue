<template>
    <p>Count : {{ count }}</p>
    <p>cartCount: {{ cartCount }}</p>
    <button type="button" @click="increment">Increment</button>
</template>
<script>
export default {
  // Manage State
  computed: {
    count () {
      console.log('Check Store Count (Vue) -> ', this.$store.state.count)
      return this.$store.state.count
    },
    // Can access to the storage defined value by `getters`
    // Getters
    cartCount () {
      console.log('Check Cart Count (Vue) -> ', this.$store.getters.cartCount)
      return this.$store.getters.cartCount
    }
  },
  // Mutations - Does not allows to change defined variable
  methods: {
    increment () {
      console.log('Check Clicked -> ', this.count)
      this.$store.commit('increment')
    }
  }
}
</script>
