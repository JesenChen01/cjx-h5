const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/pages/index.vue'),
    meta: {
      title: '主页',
      i18n: 'menus.home',
    },
  },
  {
    name: 'Charts',
    path: '/charts',
    component: () => import('@/pages/charts/index.vue'),
    meta: {
      title: '图表',
      i18n: 'menus.charts',
    },
  },
  {
    name: 'Counter',
    path: '/counter',
    component: () => import('@/pages/counter/index.vue'),
    meta: {
      title: 'Counter',
      i18n: 'menus.counter',
    },
  },
  {
    name: 'ForgotPassword',
    path: '/forgot-password',
    component: () => import('@/pages/forgot-password/index.vue'),
    meta: {
      title: '忘记密码',
      i18n: 'menus.forgotPassword',
    },
  },
  {
    name: 'Mock',
    path: '/mock',
    component: () => import('@/pages/mock/index.vue'),
    meta: {
      title: 'Mock 指南',
      i18n: 'menus.mockGuide',
    },
  },
  {
    name: 'Jsx',
    path: '/jsx',
    component: () => import('@/pages/jsx/index'),
    meta: {
      title: 'JSX 指南',
      i18n: 'menus.jsx',
      keepAlive: true,
    },
  },
  {
    name: 'keep-alive',
    path: '/keep-alive',
    component: () => import('@/pages/keepalive/index.vue'),
    meta: {
      title: 'KeepAlive 指南',
      i18n: 'menus.keepAlive',
    },
  },
  {
    name: 'scroll-cache',
    path: '/scroll-cache',
    component: () => import('@/pages/scroll-cache/index.vue'),
    meta: {
      title: 'ScrollCache 指南',
      i18n: 'menus.scrollCache',
    },
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    meta: {
      title: '登录',
      i18n: 'menus.login',
    },
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import('@/pages/register/index.vue'),
    meta: {
      title: '注册',
      i18n: 'menus.register',
    },
  },
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('@/pages/profile/index.vue'),
    meta: {
      title: '个人中心',
      i18n: 'menus.profile',
    },
  },
  {
    name: 'Settings',
    path: '/settings',
    component: () => import('@/pages/settings/index.vue'),
    meta: {
      title: '设置',
      i18n: 'menus.settings',
    },
  },
  {
    name: 'Unocss',
    path: '/unocss',
    component: () => import('@/pages/unocss/index.vue'),
    meta: {
      title: 'Unocss 指南',
      i18n: 'menus.unocss',
    },
  },
  {
    name: 'store-manage',
    path: '/store-manage',
    component: () => import('@/pages/store-manage/createStore.vue'),
    meta: {
      title: 'StoreManage',
      i18n: 'store.manage',
    },
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/exception/404.vue'),
    meta: {
      title: '404',
      i18n: 'menus.404',
    },
  },
]

export default routes
