/**
 * Created by zhangyanling on 17/8/11.
 */
const Vue_Todo = r => require.ensure([], () => r(require('@/pages/todo/index.vue')))
const arr = [{
    path: '/todo',
    name: 'page_todo',
    component: Vue_Todo,
    // If the user needs to be authenticated to view this page
    meta: {
        auth: false,
    },
}, ];
// Home
export default arr;