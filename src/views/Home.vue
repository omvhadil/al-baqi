<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import { data } from '../constans/index.js'
import Toggle from '../components/Toggle.vue'
const router = useRouter()
</script>
<template>
  <header
    class="header position-ralative bg-gradient-first-color rounded-bottom-5 border-bottom border-5 border-white shadow-sm d-flex align-items-center justify-content-center"
    style="width: 100%; height: 300px"
  >
    <div class="position-absolute" style="top: 1rem; right: 1.5rem">
      <Toggle />
    </div>
    <div class="text-center">
      <h1 class="nav_logo font-aref text-decoration-none text-white" style="font-size: 5rem">
        الْبَاقِيْ
      </h1>
      <p class="text-white" style="font-size: 2rem">Al-Baqi'</p>
    </div>
  </header>
  <main class="ps-3 pe-3 mt-4">
    <section class="section">
      <h4 class="mb-3">Kitab-kitab</h4>
      <div class="row row-gap-3">
        <div v-for="item in data" :key="item.id" class="col-3 cursor">
          <div class="content text-center">
            <div
              @click="router.push('/' + item.slug)"
              class="image bg-first-color-alt mx-auto rounded-circle d-flex justify-content-center align-items-center"
              style="width: 50px; height: 50px"
            >
              <!-- <span class="opacity-75" style="font-size: 2.5rem">{{ item.image }}</span> -->
              <img
                :src="item.image"
                alt=""
                style="width: 3.5rem !important; height: 3.5rem !important"
              />
            </div>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
