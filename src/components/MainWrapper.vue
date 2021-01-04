<template>
  <div class="wrapper">
    <Catalog/>
    <Cart
      v-if="PRODUCTS_IN_CART.length"
      :cart_data="PRODUCTS_IN_CART"
    />
  </div>
</template>

<script>
import Catalog from '@/components/catalog/Catalog.vue'
import Cart from '@/components/cart/Cart.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'MainWrapper',
  props: {},
  components: {
    Catalog,
    Cart
  },
  data() {
    return {
      title: 'Wrapper'
    }
  },
  mounted() {

  },
  computed: {
    ...mapGetters([
      'PRODUCTS_IN_CART'
    ])
  },
  watch: {

  },

}
</script>

<style lang="scss">
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
