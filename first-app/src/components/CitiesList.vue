<template>
<h1>Météo - Liste des villes</h1>
  <router-link to="/ville"><h2>Tourcoing</h2></router-link>
</template>

<script>
import City from "./City.vue";
export default {
  name: "CitiesList",
  components: City
}
</script>

<style scoped>

</style>