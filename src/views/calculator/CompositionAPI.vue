<template>
    <div>
        <input type="text" v-model="state.num1" @keyup="plusNumbers">
        <span> + </span>
        <input type="text" v-model="state.num2" @keyup="plusNumbers">
        <span> = </span>
        <span>{{ state.result }}</span>
    </div>
</template>
<script>
import { reactive } from 'vue'

export default {
  name: 'CalculatorExample',
  setup () {
    // Use reactive and apply `num1`, `num2`, `result` to 
    // Real-Time Change-point
    let state = reactive({
        num1: 0,
        num2: 0,
        result: 0
    })
    function plusNumbers () {
      state.result = parseInt(state.num1) + parseInt(state.num2);
    }

    // Return the `state` that declared as `reactive` and function `plusNumber`
    // So it's possible to use like exist-data, method option
    return {
      state,
      plusNumbers
    }
  }
}
</script>
