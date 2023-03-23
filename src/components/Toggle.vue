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
  <div @click="useMode()" style="font-size: 1.5rem; color: #fff; cursor: pointer">
    <i class="ri-contrast-fill"></i>
  </div>
</template>
