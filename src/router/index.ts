import {RouteRecordRaw, createWebHashHistory, createRouter} from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: '首页',
		component: () => import('../views/home')
	},
	{
		path: '/company',
		name: '公司',
		component: () => import('../views/company')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router