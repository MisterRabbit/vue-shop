<template>
  <div class="cart">
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @removeCartItem="removeCartItem(index)"
    />
  </div>
</template>

<script>
import CartItem from '@/components/cart/CartItem.vue'
import {mapActions} from 'vuex'

export default {
  name: 'Cart',
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    CartItem
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions([
      'REMOVE_FROM_CART'
    ]),
    removeCartItem(index) {
      this.REMOVE_FROM_CART(index)
    }
  }


}
</script>

<style lang="scss">
</style>
