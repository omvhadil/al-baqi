<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import { data } from '../constans/index.js'
import Toggle from '../components/Toggle.vue'
const router = useRouter()

// mode dark and light mode dan simpan datanya ke localstorage
</script>
<template>
  <div class="bg-success bg-gradient p-5 rounded-bottom-5 border-bottom border-5 text-light">
    <h1 class="text-center font-aref" style="font-size: 5rem">الْبَاقِيْ</h1>
    <h3 class="text-center mt-4">Al-Baqi</h3>
    <div class="position-absolute" style="top: 0.7rem; right: 1rem">
      <Toggle />
    </div>
  </div>
  <div class="container mt-4">
    <div class="row row-gap-3">
      <div v-for="item in data" :key="item.id" class="col-3">
        <div class="content text-center">
          <div
            @click="router.push('/' + item.slug)"
            class="image bg-success bg-opacity-50 mx-auto rounded-circle d-flex justify-content-center align-items-center"
            style="width: 60px; height: 60px"
          >
            <span class="opacity-75" style="font-size: 1.5rem">{{ item.image }}</span>
            <!-- <i :class="item.image" style="font-size: 2.5rem"></i> -->
          </div>
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
    <div
      class="position-absolute d-flex justify-content-center w-100"
      style="bottom: 1rem; left: 0"
    >
      <div class="text-center">
        <p class="m-0">From</p>
        <h5 class="m-0 fw-bold text-success">Alabim</h5>
      </div>
    </div>
  </div>
</template>
