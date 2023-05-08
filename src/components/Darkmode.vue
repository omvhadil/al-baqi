<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { watchEffect } from 'vue'

const useMode = () => {
  let element = document.querySelector('html')
  let mode = element.getAttribute('data-bs-theme')
  if (mode === 'dark') {
    element.setAttribute('data-bs-theme', 'light')
    localStorage.setItem('mode', 'light')
  } else {
    element.setAttribute('data-bs-theme', 'dark')
    localStorage.setItem('mode', 'dark')
  }
}

watchEffect(() => {
  if (localStorage?.getItem('mode') === 'light') {
    document.querySelector('html').setAttribute('data-bs-theme', 'light')
  } else {
    document.querySelector('html').setAttribute('data-bs-theme', 'dark')
  }
})
</script>
<template>
  <div @click="useMode()" style="color: #fff; cursor: pointer">
    <div
      class="toggle bg-white d-flex align-items-center justify-content-center"
      style="width: 22px; height: 22px"
    >
      <div class="toggle bg-dark" style="width: 10px; height: 10px"></div>
    </div>
    <!-- <i class="ri-contrast-fill"></i> -->
  </div>
</template>
