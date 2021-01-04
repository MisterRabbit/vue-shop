<template>
  <div class="catalog__wrapper">
    <h1 class="catalog__title">Catalog</h1>
    <div class="catalog">
      <CatalogItem
        v-for="product in PRODUCTS_LIST"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from '@/components/catalog/CatalogItem'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Catalog',
  props: {},
  components: {
    CatalogItem
  },
  data() {
    return {
    }
  },
  mounted() {
    this.GET_PRODUCT_LIST()
      .then(response => {
        if(response.data) {
          console.log('catalog items loaded');
        }
      })
  },
  computed: {
    ...mapGetters([
      'PRODUCTS_LIST'
    ]),
  },
  watch: {

  },
  methods: {
    ...mapActions([
      'GET_PRODUCT_LIST',
      'ADD_TO_CART'
    ]),
    addToCart(product) {
      this.ADD_TO_CART(product);
    }
  }

}
</script>

<style lang="scss">
.catalog {
  display: flex;
  flex-direction: row;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
