<template>
  <div class="card">
    <h2>{{ plant.title }}</h2>
    <h3>{{ plant.price }}</h3>
    <img :src="plant.image" alt="" />
    <button @click="shopping">BUY please :></button>
  </div>
</template>

<script setup>
defineProps({
  plant: {
    type: Object,
    required: true,
  },
})

function shopping() {}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
