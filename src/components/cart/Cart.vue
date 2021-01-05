<template>
  <div class="cart">
    <h1>Cart</h1>
    <router-link to="/">Back to catalog</router-link>

    <CartItem
      v-for="(item, index) in PRODUCTS_IN_CART"
      :key="item.id"
      :cart_item_data="item"
      @removeCartItem="removeCartItem(index)"
    />
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
    ...mapGetters([
      'PRODUCTS_IN_CART',
    ]),
  },
  methods: {
    ...mapActions([
      'REMOVE_FROM_CART'
    ]),
    removeCartItem(index) {
      this.REMOVE_FROM_CART(index)
    }
  },

}
</script>

<style lang="scss">
</style>
