import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '@/views/index.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: index,
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue'),
    // },
];

const router = new VueRouter({
    routes,
});

export default router;
