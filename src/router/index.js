import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '@/views/index.vue'
// import Login from '@/views/Login.vue'

Vue.use(VueRouter)
// vue router usage and router management;

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
                component: () => import('@/views/Me.vue')
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

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
// private router guard
router.beforeEach((to, from, next) => {
    // condition check, if the local storage has the jwt_token
    const isLogin = localStorage.ele_login ? true : false;

//if the router path is login, then just head to the login path
    if (to.path == '/login') {
        next();
    } else {
        // else, check if it localstorage contains the token, yes go to the dash board page, other wise go back to the login page
        isLogin ? next() : next("/login")

    }
})

export default router