<template>
    <div>
        <CompositionAPIInject />
    </div>
</template>
<script>
import { provide } from 'vue'
import CompositionAPIInject from './CompositionAPIInject'

export default {
  components: {
    CompositionAPIInject
  },
  setup () {
    provide('title', 'Vue.js Project')
    // Set Key and Value send through `provide` function
  }
}
</script>
