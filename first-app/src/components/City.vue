<template>
  <ul>
    <li>{{ this.name }}</li>
    <li>{{ this.weather }}</li>
    <li>{{ this.temperature }}</li>
    <li>{{ this.updatedAt }}</li>
  </ul>

</template>

<script>
export default {
  name: "City",
  data() {
    return {
      name: 'Tourcoing', // nom de la ville
      weather: 'Peu nuageux', // descriptif météo
      temperature: 20.55, // température en °C
      updatedAt: new Date() // date de dernière mise à jour

    }
  },
}
</script>

<style scoped>

</style>