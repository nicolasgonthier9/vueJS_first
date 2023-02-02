import { createRouter, createWebHistory } from 'vue-router'
import CitiesList from "../components/CitiesList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/villes',
      name: 'villes',
      component: CitiesList
    },
  ]
})

export default router
