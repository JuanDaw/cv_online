import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/estudios',
    name: 'Estudios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Estudios.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Proyectos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
