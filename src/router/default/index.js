/**
 * Created by zhangyanling on 17/8/11.
 */
const Default = r => require.ensure([], () => r(require('@/pages/default/index.vue')), 'default');
const Page_404 = r => require.ensure([], () => r(require('@/pages/default/404.vue')), '404');
const Page_error = r => require.ensure([], () => r(require('@/pages/default/error.vue')), 'error');

const arr = [
  {
    path: '/about',
    name: 'default.index',
    component: Default,
    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    }
  },
  {
    path: '/404',
    name: 'default.404',
    component: Page_404,
    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },
  {
    path: '/error',
    name: 'default.error',
    component: Page_error,
    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },
];
// Home
export default arr;
