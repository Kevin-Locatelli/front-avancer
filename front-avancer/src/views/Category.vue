<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script>
import { defineProps } from 'vue'
export default defineProps({
    msg: {
        type: String,
        default: 'Welcome to Your Vue.js + TypeScript App'
    }
})
</script>
