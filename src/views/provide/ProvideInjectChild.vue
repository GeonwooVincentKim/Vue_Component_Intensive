<template>
    
</template>
<script>
  export default {
    name: 'ProvideInjectChild',
    inject: ['itemLength'],
    mounted () {
      console.log(this.itemLength);
    }
  }
</script>
