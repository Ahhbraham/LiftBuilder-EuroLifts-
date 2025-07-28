<template>
  <div ref="threeContainer" style="margin:0; padding:0; box-sizing:border-box;"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

const threeContainer = ref(null)
//onMounted() is the correct and best way to run JavaScript code (like initializing Three.js)
onMounted(() => {
  // 1. Create the Scene
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#CED3DC')

  // 2. Create the Camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  // 3. Create and add a Cube Object
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshLambertMaterial({ color: '#A31621', emissive: '#A31621' })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  // 4. Add lighting
  const light = new THREE.DirectionalLight(0xf5f5f5, 10)
  light.position.set(1, 1, 1)
  scene.add(light)

  // 5. Sets up renderer
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  threeContainer.value.appendChild(renderer.domElement)

  // 6. Animates the scene
  function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.05
    cube.rotation.y += 0.05
    renderer.render(scene, camera)
  }
  animate()
})
</script>
