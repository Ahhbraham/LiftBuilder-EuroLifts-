<template>
  <div class="splash-screen">
    <h1>Welcome to Lift Builder</h1>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/LiftConfigurator')
  }, 3000)
})
</script>

<style scoped>
.splash-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}
</style>
