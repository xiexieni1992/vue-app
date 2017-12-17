const Home = r => require.ensure([], () => r(require('@/pages/home/index.vue')), 'home');
const arr = [{
    path: '/home',
    name: 'page_home',
    component: Home,
    meta: {
        auth: false,
    },
}, ];
// Home
export default arr;