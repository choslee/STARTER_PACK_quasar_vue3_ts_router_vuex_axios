import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/Home.vue') },
      { path: '/about', name: 'About', component: () => import('pages/About.vue') },
      { path: '/:catchAll(.*)*', component: () => import('pages/Error404.vue') }
    ]
  }
]

export default routes
