import { createRouter, createWebHistory } from 'vue-router'
import CitiesList from "../components/CitiesList.vue";
import City from "../components/City.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cities',
      name: 'cities',
      component: CitiesList
    },
    {
      path: '/city/:id',
      name: 'city',
      component: City
    },
  ]
})

export default router
