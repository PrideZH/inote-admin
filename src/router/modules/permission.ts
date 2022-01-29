export default {
  path: 'permission',
  name: 'permission',
  component: () => import('@/views/permission/index.vue'),
  redirect: '/permission/admin',
  meta: {
    locale: '权限管理', // menu.permission
    requiresAuth: true,
    icon: [
      'M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z'
    ]
  },
  children: [
    {
      path: 'admin',
      name: 'admin',
      component: () => import('@/views/permission/admin/index.vue'),
      meta: {
        locale: '账号管理' // menu.permission.admin
      }
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/permission/role/index.vue'),
      meta: {
        locale: '角色管理' // menu.permission.role
      }
    }
  ],
};
