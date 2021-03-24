import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/penyakitdetail/:id',
    name: 'PenyakitDetail',
    component: () => import(/* webpackChunkName: "penyakitdetail" */ '../views/PenyakitDetail.vue')
  },
  {
    path: '/peta',
    name: 'Peta',
    component: () => import(/* webpackChunkName: "peta" */ '../views/Peta.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
