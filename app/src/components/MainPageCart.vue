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

<style scoped></style>
