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
          path: '/madad/:slug',
          name: 'dzikir',
          component: () => import('../views/madad/Dzikir.vue')
        },
        
      ]
    }
  ]
})

export default router
