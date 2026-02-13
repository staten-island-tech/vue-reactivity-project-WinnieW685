<template>
  <div class="container">
    <MainPageCards v-for="plant in plants" :key="plant.title" :plant="plant">{{
      plant.title
    }}</MainPageCards>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MainPageCards from '@/components/MainPageCards.vue'
const plants = ref([
  { title: 'Cosmos', picture: '', price: 41.99 },
  { title: 'Indian Paintbrush', picture: '', price: 29.99 },
  { title: 'Bluebonnet', picture: '', price: 40.49 },
  { title: 'Wild Bergamot', picture: '', price: 11.99 },
  { title: 'Dahlia', picture: '', price: 99.99 },
  { title: 'Anemone', picture: '', price: 19.99 },
  { title: 'Amaranth', picture: '', price: 20.49 },
  { title: 'Chrysanthemum', picture: '', price: 64.6 },
  { title: 'Larkspur', picture: '', price: 20.99 },
  { title: 'Gladiolus', picture: '', price: 41.99 },
  { title: 'Sunflower', picture: '', price: 59.49 },
  { title: 'Gerbera Daisy', picture: '', price: 30.99 },
  { title: 'Snapdragon', picture: '', price: 78.9 },
  { title: 'Bells of Ireland', picture: '', price: 0.99 },
  { title: 'Strawflower', picture: '', price: 67.99 },
  { title: 'Morning Glory', picture: '', price: 30.0 },
  { title: 'Lobelia', picture: '', price: 24.99 },
  { title: 'Verbena', picture: '', price: 16.49 },
  { title: 'Dust miller', picture: '', price: 79.99 },
  { title: 'Sweet Alyssum', picture: '', price: 11.99 },
  { title: 'Gazania', picture: '', price: 3.99 },
  { title: 'Spider Lily', picture: '', price: 12.0 },
])
</script>

<style scoped>
div {
  padding: 16px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border: 2px black;
}
.card {
  border: 5px solid #b6b6b6;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
