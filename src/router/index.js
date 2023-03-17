import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/madad',
      name: 'madad',
      component: () => import('../layout/Madad.vue'),
      children: [
        {
          path: '',
          name: 'madad-home',
          component: () => import('../views/madad/Categori.vue')
        },
        {
          path: '/madad/fardhu',
          name: 'fardhu',
          component: () => import('../views/madad/Fardhu.vue')
        },
        {
          path: '/madad/subuh',
          name: 'subuh',
          component: () => import('../views/madad/Subuh.vue')
        },
        {
          path: '/madad/dzuhur',
          name: 'dzuhur',
          component: () => import('../views/madad/Dzuhur.vue')
        },
        {
          path: '/madad/ashar',
          name: 'ashar',
          component: () => import('../views/madad/Ashar.vue')
        },
        {
          path: '/madad/mahgrib',
          name: 'mahgrib',
          component: () => import('../views/madad/Maghrib.vue')
        },
        {
          path: '/madad/isya',
          name: 'isya',
          component: () => import('../views/madad/Isya.vue')
        },
      ]
    }
  ]
})

export default router
