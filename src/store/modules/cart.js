export default {
  state: {
    cart: [],
  },
  mutations: {
    SET_CART(state, product) {
      if (state.cart.length) {
        let productWasAdded = state.cart.find(item => item.id === product.id);
        if (productWasAdded) {
          product.quantity++;
        } else {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    SET_REMOVE(state, index) {
      state.cart.splice(index, 1)
    },
    SET_INCREMENT(state, index) {
      state.cart[index].quantity++
    },
    SET_DECREMENT(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    }
  },
  actions: {
    INCREMET_COUNT({ commit }, index) {
      commit('SET_INCREMENT', index);
    },
    DECREMENT_COUNT({ commit }, index) {
      commit('SET_DECREMENT', index);
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
    },
    REMOVE_FROM_CART({ commit }, index) {
      commit('SET_REMOVE', index)
    }

  },
  getters: {
    PRODUCTS_IN_CART(state) {
      return state.cart;
    }
  },
}