const Home = r => require.ensure([], () => r(require('@views/home/index.vue')), 'home');
const arr = [{
    path: '/home',
    name: 'home.index',
    component: Home,
    // If the user needs to be authenticated to view this page
    meta: {
        auth: false,
    },
}, ];
// Home
export default arr;