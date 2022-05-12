<template>
    <div>
        <input type="text" v-model="num1">
        <span> + </span>
        <input type="text" v-model="num2">
        <span> = </span>
        <span>{{ result }}</span>
    </div>
</template>
<script>
import { reactive, computed, toRefs } from "vue";

function plusCalculator() {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(stsate.num2))
  })

  // Use `toRefs` to make sure `num1, num2, result` works normally 
  // at External-Function
  return toRefs(state)
}

export default {
  setup () {
    let {num1, num2, result} = plusCalculator() // External Function
    return {
      num1, num2, result
    }      
  },
}
</script>
