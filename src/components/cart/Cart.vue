<template>
  <div class="cart">
    <h1>Cart</h1>
    <router-link to="/">Back to catalog</router-link>

    <CartItem
      v-for="(item, index) in PRODUCTS_IN_CART"
      :key="item.id"
      :cart_item_data="item"
      @removeCartItem="removeCartItem(index)"
      @incremet="incremet(index)"
      @decrement="decrement(index)"

    />
    <div class="cart__total">
        <p>Total: {{cartTotalPrice}}</p>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/cart/CartItem.vue'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  props: {
  },
  components: {
    CartItem
  },
  data() {
    return {
    }
  },
  computed: {
    cartTotalPrice(){
      let result = 0;
      let products = this.PRODUCTS_IN_CART;
      for (let key in products) {
        result += (parseFloat(products[key].price) * parseInt(products[key].quantity));
      }
      return result;
    },

    ...mapGetters([
      'PRODUCTS_IN_CART',
    ]),
  },
  methods: {
    ...mapActions([
      'REMOVE_FROM_CART',
      'INCREMET_COUNT',
      'DECREMENT_COUNT',
    ]),
    removeCartItem(index) {
      this.REMOVE_FROM_CART(index)
    },
    decrement(index) {
      this.DECREMENT_COUNT(index);
    },
    incremet(index) {
      this.INCREMET_COUNT(index);
    }
  },

}
</script>

<style lang="scss">
</style>
