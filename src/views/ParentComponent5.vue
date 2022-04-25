<template>
    <button type="button" @click="checkChild">자식 Component Data 조회</button>
    <child-component-5 ref="child_component" />
</template>
<script>
import ChildComponent5 from './ChildComponent5'

export default {
  components: { ChildComponent5 },
  computed: {
    msg () {
      console.log(this.$refs.child_component.msg)
      return this.$refs.child_component.msg
    }
  },
  methods: {
    checkChild () {
      alert(this.msg)
    }
  }
}
</script>
