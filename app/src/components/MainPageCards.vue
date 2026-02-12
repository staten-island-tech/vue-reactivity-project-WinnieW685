<template>
  <div>
    <h2>{{ plant.title }}</h2>
    <img src="" alt="" />
    <button>BUY please :></button>
  </div>
</template>

<script setup>
defineProps({
  plant: {
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
