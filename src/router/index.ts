import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 还有 createWebHashHistory 和 createMemoryHistory
const constRouters: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/home.vue'),
    },
]
export const Router = createRouter({
    history: createWebHistory(),
    routes: [...constRouters],
})
