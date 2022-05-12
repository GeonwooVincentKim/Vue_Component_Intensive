<template>
  <div>
    <h2></h2>
    <div>
      <input type="text" v-model="state.num1">
      <span> + </span>
      <input type="text" v-model="state.num2">
      <span> = </span>
      <span>{{ state.result }}</span>
    </div>
  </div>
</template>
<script>
import { reactive, computed } from 'vue'

export default {
  name: 'CalculatorExample',
  setup () {
    // If you use `let` declaration,
    // it says `If a variable is never reassigned, using the `const` declaration is better.

    // In this code, `state` variable did not reassigned after declared
    // So it cannot use `let` if developer does not trying to modify variable values

    // Reducing cognitive load and improving maintainability
    const state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    })
    return {
      state
    }
  }
}
</script>
