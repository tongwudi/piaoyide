import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('views/index.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('views/home/index.vue'),
                meta: { title: '首页', footShow: true }
            },
            {
                path: '/camera',
                component: () => import('views/camera/index.vue'),
                meta: { title: '相机' }
            },
            {
                path: '/ticket',
                component: () => import('views/ticket/index.vue'),
                meta: { title: '票夹', footShow: true }
            },
            {
                path: '/list',
                name: 'ticketList',
                component: () => import('views/ticket/ticketList.vue'),
                meta: { title: '票夹', keepAlive: true }
            },
            {
                path: '/detail',
                name: 'ticketDetail',
                component: () => import('views/ticket/ticketDetail.vue'),
                meta: { title: '票夹' }
            },
            {
                path: '/add',
                name: 'addTicket',
                component: () => import('views/ticket/addTicket.vue'),
                meta: { title: '票夹' }
            },
            {
                path: '/mine',
                component: () => import('views/mine/index.vue'),
                meta: { title: '我的', footShow: true }
            }
        ]
    }
]

const router = new VueRouter({
    // 解决路由跳转页面没有置顶
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes
})


export default router
