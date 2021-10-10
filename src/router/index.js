import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  { path: '/pollution-city', component: () => import('@/views/PollutionCity.vue') },
  { path: '/pollution-brazil', component: () => import('@/views/PollutionBrazil.vue') },
  { path: '/ranking-countries', component: () => import('@/views/PollutionRanking.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
