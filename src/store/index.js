import Vue from 'vue'
import Vuex from 'vuex'
import Catalog from './modules/catalog'
import Cart from './modules/cart'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Catalog,
    Cart
  }
})


