<template>
  <div class="cart">
    <CartItem
      v-for="cart_item in cart_data"
      :key="cart_item.id"
      :cart_item_data="cart_item"
    />
  </div>
</template>

<script>
import CartItem from '@/components/cart/CartItem.vue'

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


}
</script>

<style lang="scss">
</style>
