<template>
  <div class="wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'MainWrapper',
  props: {},
  components: {},
  data() {
    return {}
  },
  mounted() {},
  computed: {},
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
