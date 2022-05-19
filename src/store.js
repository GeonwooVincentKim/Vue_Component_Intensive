import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0,
      cart: [{
        product_id: 1,
        product_name: '아이폰 거치대',
        category: 'A'
      }]
    }
  },
  getters: {
    cartCount: (state) => {
      console.log('Cart Length -> ', state.cart.length)
      return state.cart.length
    }
  },
  mutations: {
    increment (state) {
      console.log('Check State Count -> ', state.count)
      state.count++
    }
  },
  actions: {
    increment (context) {
      // Available to execute Asynchronous Processing Logic
      console.log('Is program here ? -> ')
      context.commit('increment')
    }
  }
})

export default store
