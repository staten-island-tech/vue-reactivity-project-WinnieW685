<template>
  <div>
    <h2>{{ meal.title }}</h2>
    \
    <h3>{{ meal.ingredients }}</h3>
    <h3>{{ meal.steps }}</h3>
  </div>
</template>

<script setup>
defineProps({
  meal: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
