<template>
  <div>
    <h2>{{ plant.title }}</h2>
    <h2>{{ plant.price }}</h2>
    <button @click="$emit('delete')">Delete</button>
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
defineEmits(['delete'])

function removePlant(index) {}
</script>

<style scoped></style>
