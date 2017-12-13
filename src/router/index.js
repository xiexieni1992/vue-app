/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */
import Vue from 'vue'
import Router from 'vue-router'

import Home from './home'
import Hello from './hello'

Vue.use(Router)

// 设置路由默认状态
const arr = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/*',
        redirect: '/home'
    }
];

const router = new Router({
    mode: 'history',
    routes: [...Home, ...Hello, ...arr]
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(m => m.meta.auth)) {
//         /*
//          * If the user is not authenticated and visits
//          * a page that requires authentication, redirect to the login page
//          */
//         next({
//             name: 'login.index',
//         });
//     } else if (to.matched.some(m => m.meta.guest)) {
//         /*
//          * If the user is authenticated and visits
//          * an guest page, redirect to the dashboard page
//          */
//         next({
//             name: 'home.index',
//         });
//     } else {
//         next();
//     }
// })

export default router