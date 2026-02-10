<template>
  <div>
    <form action="submit" @submit.prevent="login(user)">
      <label for="username">Username</label>
      <input type="text" v-model="user.username" />
      <label for="password">Password</label>
      <input type="password" v-model="user.password" />
      <button class="login" type="submit">login</button>
    </form>
    <h2 v-if="loggedin">Welcome {{ user.username }}</h2>
    <h2 v-else>Please Login</h2>
  </div>
</template>

<script setup>
//add new ref for logged in: Boolean. New function to update that value
import { reactive, ref } from 'vue' //more complex data structure to save as an object
const user = reactive([{ username: '', password: '' }])
const loggedin = ref(false)
function login(user) {
  console.log(user)
  loggedin.value = true
}
</script>

<style scoped></style>
