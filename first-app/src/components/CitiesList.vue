<template>
<h1>Météo - Liste des villes</h1>
  <div id="citiesIndex">
    <ul v-for="city in cities">
      <li>
        <router-link to="/city/:{{city.id}}">
          {{ city.name }}
        </router-link>
      </li>
      <li>{{ city.weather }}</li>
      <li>{{ city.temperature }}</li>
      <li> Date : {{ city.updatedAt.toLocaleString() }}</li>
    </ul>
  </div>
  <router-view/>
</template>

<script>
import City from "./City.vue";
export default {
  name: "CitiesList",
  components: City,
  data() {
    return {
      cities: [
        {
          id: 1,
          name: 'Ville 1',
          weather: 'Ensoleillé',
          temperature: 22.0,
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Ville 2',
          weather: 'Peu nuageux',
          temperature: 19.5,
          updatedAt: new Date()
        }
      ]
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


