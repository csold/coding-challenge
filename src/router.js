import Vue from 'vue'
import Router from 'vue-router'
import Page1 from './views/Page1.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/Page2',
      name: 'page2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page2.vue')
    }
  ]
})
