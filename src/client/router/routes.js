export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login-view"*/'@views/login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home-view"*/'@views/home')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test-view"*/'@views/test')
  }
]
