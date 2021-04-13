import {RouteRecordRaw, createWebHistory, createRouter} from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: '首页',
		component: () => import('../views/home.vue')
	},
	{
		path: '/company',
		name: '公司',
		component: () => import('../views/company.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router