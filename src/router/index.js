import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Index from '@/pages/home/index'
import Cart from '@/pages/cart/cart'
import Car from '@/pages/car/car'
import User from '@/pages/user/user'

Vue.use(Router)

export default new Router({
    mode: "history",
    //所有路由
    routes: [{
            path: '/',
            //路由重定向
            redirect: '/home'
        },
        {
            path: '/home',
            component: Index
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/car',
            component: Car
        },
        {
            path: '/user',
            component: User
        }
    ]
})