<template>
  <article class="catalog-item">
    <img
      class="catalog-item__img"
      :src=" require('../../assets/img/' + product_data.image) "
      alt="product_data.title"
    >
    <h4 class="catalog-item__price">{{ product_data.title }}</h4>
    <p class="catalog-item__price">Price: {{ product_data.price }}</p>
    <button
      class="btn catalog-item__add-cart"
      @click="addToCart"
    >Add to cart
    </button>
  </article>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: {
    product_data: {
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

  },
  computed: {

  },
  watch: {

  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  }

}
</script>

<style lang="scss">
.catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
