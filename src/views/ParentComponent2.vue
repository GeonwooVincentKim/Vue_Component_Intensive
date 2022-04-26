<template>
    <child-component @send-message="sendMessage" ref="child_component" />
</template>
<script>
import ChildComponent from './ChildComponent2.vue'

export default {
  components: { ChildComponent },
  mounted () {
    this.$refs.child_component.callFromparent();
  }
}
</script>
