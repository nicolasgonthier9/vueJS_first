<template>
  <ul>
    <li>{{ name }}</li>
    <li>{{ weather }}</li>
    <li>{{ temperature }}</li>
    <li> Date : {{ updatedAt }}</li>
  </ul>
</template>

<script>
export default {
  name: "City",
  props: {
    name: String,
    weather: String,
    temperature: Number,
    updatedAt: String
}
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>