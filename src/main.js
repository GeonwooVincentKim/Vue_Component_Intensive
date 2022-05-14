import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import mixins from './mixins'

createApp(App).use(router).mixin(mixins).mount('#app')

const app = createApp(App)
app.directive('focus', {
  mounted (el) {
    el.focus()
  }
})
