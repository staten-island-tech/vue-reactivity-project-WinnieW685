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
  { title: 'Indian Paintbrush', picture: '', price: 41.99 },
  { title: 'Bluebonnet', picture: '', price: 41.99 },
  { title: 'Wild Bergamot', picture: '', price: 41.99 },
  { title: 'Dahlia', picture: '', price: 41.99 },
  { title: 'Anemone', picture: '', price: 41.99 },
  { title: 'Amaranth', picture: '', price: 41.99 },
  { title: 'Chrysanthemum', picture: '', price: 41.99 },
  { title: 'Larkspur', picture: '', price: 41.99 },
  { title: 'Gladiolus', picture: '', price: 41.99 },
  { title: 'Sunflower', picture: '', price: 41.99 },
  { title: 'Gerbera Daisy', picture: '', price: 41.99 },
  { title: 'Snapdragon', picture: '', price: 41.99 },
  { title: 'Bells of Ireland', picture: '', price: 41.99 },
  { title: 'Strawflower', picture: '', price: 41.99 },
  { title: 'Morning Glory', picture: '', price: 41.99 },
])
</script>

<style scoped></style>
