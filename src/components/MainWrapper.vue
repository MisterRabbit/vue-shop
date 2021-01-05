<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'MainWrapper',
  props: {},
  components: {},
  data() {
    return {
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
