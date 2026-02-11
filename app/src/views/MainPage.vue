<template>
  <div class="container">
    <MainPageCards v-for="meal in meals" :key="meal.title" :meal="animal">{{
      animal.name
    }}</MainPageCards>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MainPageCards from '@/components/MainPageCards.vue'
</script>

<style scoped></style>
