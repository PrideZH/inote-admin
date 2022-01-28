import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

import IndexLayout from '@/layout/IndexLayout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: IndexLayout,
    redirect: '/workbench',
    children: [
      {
        path: '/workbench',
        component: () => import('@/views/Index/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue')
  }
];

const router: Router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
