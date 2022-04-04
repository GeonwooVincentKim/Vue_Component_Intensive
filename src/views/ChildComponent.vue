<template>
    <button type="button" @click="childFunc" ref="btn">Click</button>
</template>
<script>
export default {
  methods: {
    childFunc () {
      console.log()
    }
  }
}
</script>
