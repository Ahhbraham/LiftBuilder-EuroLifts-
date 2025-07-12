<template>
  <div class="euro-lifts">
    <div class="container">
      <img ref="logo" src="../assets/EuroLiftsLogo.png" alt="header" />

      <h4 ref="textLeft" class="text__left">EURO</h4>
      <h4 ref="textRight" class="text__right">LIFTS</h4>

      <h5 ref="feature1" class="feature-1">Escalators</h5>
      <h5 ref="feature2" class="feature-2">HomeLifts</h5>
      <h5 ref="feature3" class="feature-3">Walkways</h5>
      <h5 ref="feature4" class="feature-4">Bedlifts</h5>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import ScrollReveal from 'scrollreveal'

const router = useRouter()

const logo = ref(null)
const textLeft = ref(null)
const textRight = ref(null)
const feature1 = ref(null)
const feature2 = ref(null)
const feature3 = ref(null)
const feature4 = ref(null)

onMounted(() => {
  // The slide at the start
  const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
  }

  // below is image for icon
  ScrollReveal().reveal(logo.value, {
    duration: 1000,
    delay: 1200,
  })

  // below is text for Euro
  ScrollReveal().reveal(textLeft.value, {
    ...scrollRevealOption,
    origin: 'right',
    delay: 2000,
  })

  // below is text for Lifts
  ScrollReveal().reveal(textRight.value, {
    ...scrollRevealOption,
    origin: 'left',
    delay: 2000,
  })

  // Features words
  ScrollReveal().reveal([feature1.value, feature2.value, feature3.value, feature4.value], {
    duration: 1400,
    interval: 250,
    delay: 2700,
  })

  // setTimeout(() => {
  //   router.push('/LiftBuilder')
  // }, 4900)
})
</script>

<style scoped>
/* styles.css */
.euro-lifts {
  --primary-color: #f5f5f5;
  --text-dark: #000c66;
  --white: #e2e2f3;
  --max-width: 1200px;
}

/* Base styles */
.euro-lifts * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.euro-lifts {
  font-family: 'Nunito Sans', sans-serif;
  background-color: #f5f5f5;
}

/* Animated background effect */
.euro-lifts::after {
  position: fixed;
  content: '';
  height: 100%;
  width: 0;
  top: 0;
  right: 0;
  background-color: var(--text-dark);
  z-index: -1;
  animation: body-bg 1s ease-in-out forwards;
}

@keyframes body-bg {
  0% {
    width: 0vw;
  }
  100% {
    width: 50vw;
  }
}

/* Container styles */
.container {
  position: relative;
  height: 100vh;
  width: 100%;
}

.container img {
  position: absolute;
  width: 100%;
  max-width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 0 50px rgba(0, 0, 0, 0.8));
}

/* Guardian text */
.container h4 {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 5rem;
  color: var(--white);
  letter-spacing: 25px;
}

/* Split text positioning */
.text__left {
  transform: translate(calc(-50% - 250px), -50%);
}

.text__right {
  transform: translate(calc(-50% + 250px), -50%);
}

/* Feature text styles */
.container h5 {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.4rem;
  font-weight: 500;
}

.container h5::after {
  position: absolute;
  content: '';
  height: 1px;
  width: 100px;
  top: 50%;
}

/* Feature positioning and colors */
.feature-1 {
  color: var(--text-dark);
  transform: translate(calc(-50% - 300px), calc(-50% - 200px));
}

.feature-2 {
  color: var(--white);
  transform: translate(calc(-50% + 300px), calc(-50% - 200px));
}

.feature-3 {
  color: var(--text-dark);
  transform: translate(calc(-50% - 300px), calc(-50% + 200px));
}

.feature-4 {
  color: var(--white);
  transform: translate(calc(-50% + 300px), calc(-50% + 200px));
}

/* Feature line styles */
.feature-1::after,
.feature-3::after {
  right: 0;
  transform: translate(calc(100% + 40px), -50%);
  background-color: var(--text-dark);
}

.feature-2::after,
.feature-4::after {
  left: 0;
  transform: translate(calc(-100% - 40px), -50%);
  background-color: var(--white);
}
</style>
