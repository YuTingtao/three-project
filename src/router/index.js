import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/index.vue'),
  },
  {
    path: '/pano',
    name: 'pano',
    component: () => import(/* webpackChunkName: "pano" */ '@/views/pano.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
