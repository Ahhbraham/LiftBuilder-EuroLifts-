import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '../views/SplashScreen.vue'
import LiftBuilder from '../views/LiftBuilder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SplashScreen',
      component: SplashScreen,
    },
    {
      path: '/LiftBuilder',
      name: 'LiftBuilder',
      component: LiftBuilder,
    },
  ],
})

export default router
