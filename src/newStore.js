import { createStore } from 'vuex';
import persistedstate from 'vuex-persistedstate'

const newStore = createStore({
  state () {
    return {
      user: {}
    }
  },
  mutations: {
    user (state, data) {
      state.euser = data
    }
  },
  plugins: [
    persistedstate({
      path: ['user']
    })
  ]
})

export default newStore
