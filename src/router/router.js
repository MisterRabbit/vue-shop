import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '../components/catalog/Catalog'
import Cart from '../components/cart/Cart'
import NotFoundComponent from '../components/NotFoundComponent'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      props: true,
    },
    {
      path: '*',
      name: 404,
      component: NotFoundComponent
    }
  ]
})