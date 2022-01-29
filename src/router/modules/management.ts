export default {
  path: 'management',
  name: 'management',
  component: () => import('@/views/management/index.vue'),
  redirect: '/management/user',
  meta: {
    locale: '模块管理', // menu.management
    requiresAuth: true,
    icon: [
      'M160 448a32 32 0 01-32-32V160.064a32 32 0 0132-32h256a32 32 0 0132 32V416a32 32 0 01-32 32H160zm448 0a32 32 0 01-32-32V160.064a32 32 0 0132-32h255.936a32 32 0 0132 32V416a32 32 0 01-32 32H608zM160 896a32 32 0 01-32-32V608a32 32 0 0132-32h256a32 32 0 0132 32v256a32 32 0 01-32 32H160zm448 0a32 32 0 01-32-32V608a32 32 0 0132-32h255.936a32 32 0 0132 32v256a32 32 0 01-32 32H608z'
    ]
  },
  children: [
    {
      path: 'user',
      name: 'user',
      component: () => import('@/views/management/user/index.vue'),
      meta: {
        locale: '用户管理' // menu.management.user
      }
    }
  ],
};
