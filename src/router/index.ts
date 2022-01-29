import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

import IndexLayout from '@/layout/IndexLayout/index.vue';
import appRoutes from './modules';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'dashboard',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    name: "root",
    path: "/",
    component: IndexLayout,
    children: appRoutes,
  }
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'notFound',
  //   component: () => import('@/views/not-found/index.vue'),
  // },
];

const router: Router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
