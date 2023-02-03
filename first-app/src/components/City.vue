<template>
  <ul>
    <li>{{ city.name }}</li>
    <li>{{ city.weather }}</li>
    <li>{{ city.temperature }}</li>
    <li> Date : {{ city.updatedAt.toLocaleString() }}</li>
  </ul>

</template>

<script>
export default {
  name: "City",
  props: {
    city: ['name', 'weather', 'temperature', 'updatedAt'],
}
}
</script>

<style scoped>

</style>