import { createRouter, createWebHistory } from 'vue-router'
import App from "../App.vue";
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
      path: '/villes',
      name: 'villes',
      component: CitiesList
    },
    {
      path: '/ville',
      name: 'ville',
      component: City
    },
  ]
})

export default router
