<template>
<h1>Météo - Liste des villes</h1>
<City v-for="city in cities.list"
      :name="city.name"
      :weather="city.weather"
      :temperature="city.temperature"
      :updated-at="city.updatedAt">
</City>
</template>

<script>
import City from "./City.vue";
import { format, render, cancel, register } from 'timeago.js';
export default {
  name: "CitiesList",
  components: {City},
  data() {
    return {
      cities: "",
      loading: true,
      error: 1,
    }
  },
  created() {
    const apiCall = fetch('https://api.openweathermap.org/data/2.5/find?lat=45.758&lon=4.765&cnt=20&cluster=yes&lang=fr&units=metric&APPID=9d5f29dc825727bfc3117dcbaed7708f')
        .then(res => res.json());
    if (this.loading){
      console.log('Requête en cours')
    }
    if (this.error != null) {
      throw new Error('Erreur programmée à la création du composant.')
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
  
}

#citiesIndex {
  margin: 50px;
}
</style>