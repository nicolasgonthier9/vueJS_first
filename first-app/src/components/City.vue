<template>

</template>

<script>
export default {
  name: "City",
  data() {
    return {
      name: 'Ma ville', // nom de la ville
      weather: 'Peu nuageux', // descriptif météo
      temperature: 20.55, // température en °C
      updatedAt: new Date().toLocaleString() // date de dernière mise à jour
    }
  }
}
</script>

<style scoped>

</style>