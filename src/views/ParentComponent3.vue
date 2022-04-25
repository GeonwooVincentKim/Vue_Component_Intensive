<template>
    <child-component-3 @send-message="sendMessage" ref="child_component" />
    <button type="button" @click="changeChildData">Change Child Data</button>
</template>
<script>
import ChildComponent3 from './ChildComponent3.vue'

export default {
  components: { ChildComponent3 },
  methods: {
    changeChildData () {
      this.$refs.child_component.msg = '부모 컴포넌트가 변경한 데이터'
    }
  }
}
</script>
