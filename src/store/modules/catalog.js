import axios from "axios";

export default {
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS_LIST(state, products) {
      state.products = products;
    }
  },
  actions: {
    GET_PRODUCT_LIST({ commit }) {
      return axios.get('http://localhost:3000/products')
        .then(products => {
          commit('SET_PRODUCTS_LIST', products.data);
          return products;
        })
        .catch(error => {
          console.log(error);
          return error;
        })

  }
  },
  getters: {
    PRODUCTS_LIST(state) {
      return state.products;
    }
  },
}