<template>
  <h1>Buy CHEAP flowers</h1>
  <div class="container">
    <MainPageCards show-card="" v-for="plant in plants" :key="plant.title" :plant="plant">
      <button @click="addToCart(plant)" class="buy">buy</button></MainPageCards
    >
  </div>
  <MainPageCart
    v-for="plant in boughts"
    :key="plant"
    :plant="plant"
    @remove="removePlant(plant)"
  ></MainPageCart>

  <h2>Total: ${{ totalPrice() }}</h2>
</template>

<script setup>
import { ref } from 'vue'
function totalPrice() {
  let total = 0
  for (let plant of boughts.value) {
    total += plant.price
    console.log(total.toFixed(2))
  }
  return total.toFixed(2)
}
const boughts = ref([])
function addToCart(plant) {
  let newPlant = { ...plant }
  const id = boughts.value.length
  newPlant.id = id
  boughts.value.push(newPlant)
}
function removePlant(plant) {
  console.log(plant.id)

  boughts.value = boughts.value.filter((t) => t.id != plant.id)
}
import MainPageCards from '@/components/MainPageCards.vue'
import MainPageCart from '@/components/MainPageCart.vue'
const plants = ref([
  { title: 'Cosmos', picture: 'cosmos.jpg', price: 41.99 },
  { title: 'Indian Paintbrush', picture: 'IndianPaintbrush.jpg', price: 29.99 },
  { title: 'Bluebonnet', picture: 'BlueBonnet.jpg', price: 40.49 },
  { title: 'Wild Bergamot', picture: 'WildBergamot.jpg', price: 11.99 },
  { title: 'Dahlia', picture: 'Dahlia.jpg', price: 99.99 },
  { title: 'Anemone', picture: 'Anemone.jpg', price: 19.99 },
  { title: 'Amaranth', picture: 'Amaranth.jpg', price: 20.49 },
  { title: 'Chrysanthemum', picture: 'Chrysanthemum.jpg', price: 67.69 },
  { title: 'Larkspur', picture: 'Larkspur.jpg', price: 20.99 },
  { title: 'Gladiolus', picture: 'Gladiolus.jpg', price: 41.99 },
  { title: 'Sunflower', picture: 'Sunflower.jpg', price: 59.49 },
  { title: 'Gerbera Daisy', picture: 'GerberaDaisy.jpg', price: 30.99 },
  { title: 'Snapdragon', picture: 'Snapdragon.jpg', price: 78.99 },
  { title: 'Bells of Ireland', picture: 'BellsofIreland.jpg', price: 0.99 },
  { title: 'Strawflower', picture: 'Strawflower.jpg', price: 67.99 },
  { title: 'Morning Glory', picture: 'MorningGlory.jpg', price: 30.99 },
  { title: 'Lobelia', picture: 'Lobelia.jpg', price: 24.99 },
  { title: 'Verbena', picture: 'Verbena.jpg', price: 16.49 },
  { title: 'Dust Miller', picture: 'Dustmiller.jpg', price: 79.99 },
  { title: 'Sweet Alyssum', picture: 'SweetAlyssum.jpg', price: 11.99 },
  { title: 'Gazania', picture: 'Gazania.jpg', price: 3.99 },
  { title: 'Spider Lily', picture: 'SpiderLily.jpg', price: 12.05 },
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
button {
  padding: 5px;
  background-color: white;
  border-radius: 4px;
}
</style>
