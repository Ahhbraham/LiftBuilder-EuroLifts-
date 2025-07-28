import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '../views/SplashScreen.vue'
import LiftConfigurator from '../views/LiftConfigurator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SplashScreen',
      component: SplashScreen,
    },
    {
      path: '/LiftConfigurator',
      name: 'LiftConfigurator',
      component: LiftConfigurator,
    },
  ],
})

export default router
