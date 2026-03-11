<template>
  <div class="card">
    <h2>{{ plant.title }}</h2>
    <h3>{{ plant.price }}</h3>
    <img :src="plant.picture" alt="" class="pics" />
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  plant: {
    type: Object,
    required: true,
  },
})
const emits = defineEmits(['showCard'])
function shopping() {
  emits('showCard')
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.pics {
  padding-bottom: 8px;
  width: 200px;
  height: 200px;
}
</style>
