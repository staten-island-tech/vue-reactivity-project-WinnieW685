<template>
  <div>
    <h2>{{ plant.title }}</h2>
    <h2>{{ plant.price }}</h2>
    <button @click="$emit('remove')">Delete</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  plant: {
    type: Object,
    required: true,
  },
})
defineEmits(['remove'])
function removePlant(plant) {
  boughts.value = boughts.value.filter((t) => t !== plant)
}
</script>

<style scoped>
button {
  padding: 5px;
  background-color: white;
  border-radius: 4px;
}

div {
  border-radius: 2px;
  border-color: gray;
}
</style>
