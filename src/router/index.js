import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/index.vue';
import About from '../pages/about.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'NotFound',
        path: '/:catchAll(.*)',
        redirectTo: '/'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;