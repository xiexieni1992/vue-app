const Login = r => require.ensure([], () => r(require('@/pages/auth/login')), 'auth');
const arr = [
  {
    path: '/login',
    name: 'login.index',
    component: Login,

    // If the user needs to be a guest to view this page
    meta: {
      guest: true,
    },
  },
];
// Auth
export default arr;
