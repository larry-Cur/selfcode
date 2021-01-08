import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    meta: {
      name: '首页'
    },
    component: Home
  },
  {
    path: '/comps',
    name: 'comps',
    meta: {
      name: '组件传值'
    },
    component: () => import( /* webpackChunkName: "comps" */ '../views/vueComps/Comps.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  // }, {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  // }, {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router