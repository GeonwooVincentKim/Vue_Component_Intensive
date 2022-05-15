import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n'

// createApp(App).use(router).mixin(mixins).mount('#app')

const i18nStrings = {
  en: {
    hi: 'Hello!'
  },
  ko: {
    hi: '안녕하세요!'
  }
}

const app = createApp(App)
app.directive('focus', {
  mounted (el) {
    el.focus()
  }
})

createApp(App)
app.use(router)
app.use(store)
app.use(i18nPlugin, i18nStrings)
app.use(mixins)
app.mount('#app')
