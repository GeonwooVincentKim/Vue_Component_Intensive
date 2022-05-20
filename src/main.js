import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n'
import newStore from './newStore'
// const cors = require('cors')

// createApp(App).use(router).mixin(mixins).mount('#app')

const i18nStrings = {
  en: {
    hi: 'Hello!'
  },
  ko: {
    hi: '안녕하세요!'
  }
}

// const corsOption = {
//   origin: 'http://localhost:8080',
//   credentials: true // Add set contents into the response header if is true
// }

const app = createApp(App)
app.directive('focus', {
  mounted (el) {
    el.focus()
  }
})

createApp(App)
app.use(router)
app.use(store)
app.use(newStore)
app.use(i18nPlugin, i18nStrings)
app.use(mixins)
// app.use(cors(corsOption))
app.mount('#app')

window.Kakao.init('a63e73765b46ad52f2b3feed0690608f')
