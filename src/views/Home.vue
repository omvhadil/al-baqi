<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import { data } from '../constans/index.js'
const router = useRouter()

// mode dark and light mode dan simpan datanya ke localstorage
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
</script>
<template>
  <div class="bg-success bg-gradient p-5 rounded-bottom-5 border-bottom border-5">
    <h1 class="text-center font-aref" style="font-size: 5rem">الْخَيْرِيَة</h1>
    <h3 class="text-center">AL-khairiyah</h3>
  </div>
  <div class="container mt-4">
    <div class="form-check form-switch mb-3">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        @click="useMode()"
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">Mode</label>
    </div>
    <div class="row row-gap-3">
      <div v-for="item in data" :key="item.id" class="col-4 text-center">
        <div
          @click="router.push('/' + item.slug)"
          class="text-center border bg-secondary bg-opacity-25"
          style="height: 170px"
        >
          <img :src="item.image" alt="" />
        </div>
        <h5 class="mt-1">{{ item.title }}</h5>
      </div>
    </div>
  </div>
</template>
