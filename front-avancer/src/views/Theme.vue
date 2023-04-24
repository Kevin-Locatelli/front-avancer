<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
import { defineProps } from 'vue'
 export default defineProps({
  msg: {
    type: String,
    default: 'Welcome to Your Vue.js + TypeScript App'
  }
})
</script>
