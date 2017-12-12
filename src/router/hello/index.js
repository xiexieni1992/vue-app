const helloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'auth');
const arr = [{
    path: '/hello',
    name: 'hello.index',
    component: helloWorld,

    // If the user needs to be a guest to view this page
    meta: {
        guest: true,
    },
}];
// 
export default arr;