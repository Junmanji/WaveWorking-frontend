import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/page/Home.vue';

const routes = [
	{
		path: '/:catchAll(.*)',
		component: () => import('@/page/NotFound.vue')
	},
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/Channel',
		name: 'Channel',
		component: () => import('@/page/Channel.vue')
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;