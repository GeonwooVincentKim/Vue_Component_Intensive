# vue_component_intensive

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### (Number of) errors and 0 warnings potentially fixable with the `--fix` option issue

- Clear import statements from `store - index.js`
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import mixins from './mixins'

// createApp(App).use(store).use(router).mount('#app')
createApp(App).use(router).mixin(mixins).mount('#app')
```

- Add `mixins.js` below the `src` file-directory
```js
import axios from 'axios'

export default {
  methods: {
    async $api (url, method, data) {
      return (await axios({
        method: method,
        url,
        data
      }).catch(e => {
        console.log(e)
      })).data
    }
  }
}
```

- Fix `ESLint` Issue -> [ESLint VueJS Stackoverflow Issue](https://stackoverflow.com/questions/51265476/fix-doesnt-fix-the-errors-using-eslint)

- This is the ESLine issue which occurs errors and warnings issue
```
.\node_modules\.bin\eslint src\** --fix
```

- Re-Run the application
