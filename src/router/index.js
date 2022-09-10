import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '@/views/index.vue'
// import Login from '@/views/Login.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/index.vue'),
        children: [
            {
                path: '',
                redirect: '/home'
            },
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/Home.vue')
            },
            {
                path: '/order',
                name: 'order',
                component: () => import('@/views/Order.vue')
            },
            {
                path: '/me',
                name: 'me',
                component: () => import('@/views/Me.vue'),
            },

            {
                path: '/address',
                name: 'address',
                component: () => import('@/views/Address.vue')
            },
            {
                path: '/city',
                name: 'city',
                component: () => import('@/views/City.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/Search.vue')
    }
    , {
        path: '/goods',
        name: 'Shop',
        component: () => import('@/views/shop/Shop.vue'),
        redirect: '/good',
        children: [
            {
                path: '/good',
                name: 'Goods',
                component: () => import('@/views/shop/Goods.vue')
            },
            {
                path: '/comment',
                name: 'Comments',
                component: () => import('@/views/shop/Comments.vue')
            },
            {
                path: '/seller',
                name: 'Sellers',
                component: () => import('@/views/shop/Seller.vue')
            },
        ],
    },
    {
        path: '/myAddress',
        name: 'Myaddress',
        component: () => import('@/views/order/Myaddress.vue')
    },

    {
        path: '/addAddress',
        name: 'Addaddress',
        component: () => import('@/views/order/Addaddress.vue')
    },
    {
        path: '/settlement',
        name: 'Settlement',
        component: () => import('@/views/order/Settlement.vue')
    },
    {
        path: '/remark',
        name: 'Remark',
        component: () => import('@/views/order/Remark.vue')
    },
    {
        path: '/pay',
        name: 'Pay',
        component: () => import('@/views/order/Pay.vue')
    },
]

const router = new VueRouter({
    mode: 'hash',
    // base: process.env.BASE_URL,
    // linkActiveClass: 'active',
    routes
})

// router.beforeEach((to, from, next) => {
//     const isLogin = localStorage.ele_login ? true : false;
//     if (to.path == '/login') {
//         next();
//     } else {
//         isLogin ? next() : next("/login")

//     }
// })

export default router