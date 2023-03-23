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
    <h1 class="text-center font-aref" style="font-size: 5rem">آلاَبِمْ</h1>
    <h3 class="text-center">alabim</h3>
    <div class="position-absolute" style="top: 0.7rem; right: 1rem">
      <Toggle />
    </div>
  </div>
  <div class="container mt-4">
    <div class="row row-gap-3">
      <div v-for="item in data" :key="item.id" class="col-3 text-center">
        <div
          @click="router.push('/' + item.slug)"
          class="mx-auto border bg-success-subtle rounded-circle bg-opacity-25 p-2"
          style="height: 60px; width: 60px"
        >
          <img :src="item.image" class="rounded-circle" />
        </div>
        <h5 class="mt-1 text-small">{{ item.title }}</h5>
      </div>
    </div>
  </div>
</template>
