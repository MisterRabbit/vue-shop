<template>
  <div class="cart-item">
    <img :src=" require('../../assets/img/' + cart_item_data.image) " alt="cart_item_data.title"
    >
    <div class="cart-item__info">
      <p>{{cart_item_data.title}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart-item__quantity">{{cart_item_data.quantity}}</div>
    <button @click="removeCartItem">Remove</button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {

  },
  data() {
    return {
    }
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  },
  methods: {
    removeCartItem() {
      this.$emit('removeCartItem');
    },
  }


}
</script>

<style lang="scss">
</style>
