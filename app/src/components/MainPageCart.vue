<template>
  <div>
    <h2>{{ bought }}</h2>
    <button @click="removePlant">Delete</button>
  </div>
</template>

<script setup>
defineProps({
  bought: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>
