import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Peta from '../views/Peta.vue'
import PenyakitDetail from '../views/PenyakitDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/penyakitdetail/:id',
    name: 'PenyakitDetail',
    component: PenyakitDetail
  },
  {
    path: '/peta',
    name: 'Peta',
    component: Peta
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
