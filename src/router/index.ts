import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const allRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/pano',
    component: () => import('@/views/PanoView.vue')
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes,
  scrollBehavior(to, from) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return {
      top: 0
    };
  }
});

export default router;
