import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import(/* webpackChunkName: "sales" */ '../views/Blog.vue'),
    },
  ],
})

router.afterEach((to, from) => {
  store.commit('setPage', to.name)
})

export default router
