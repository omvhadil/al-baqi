<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import { data } from '../constans/index.js'
// import Toggle from '../components/Toggle.vue'
const router = useRouter()

// mode dark and light mode dan simpan datanya ke localstorage
</script>
<template>
  <header class="header bg-success bg-gradient position-fixed" style="width: 450px; height: 6rem">
    <nav
      class="nav ps-3 pe-3 d-flex align-items-center justify-content-between"
      style="height: 3.5rem"
    >
      <a href="#" class="nav_logo font-aref text-decoration-none text-white fs-4">الْبَاقِيْ</a>
      <!-- <div class="toggle">
        <Toggle />
      </div> -->
    </nav>
    <article class="ps-4 pe-4">
      <div class="content_articl bg-white p-3 rounded shadow-sm">
        <p class="m-0 text-center fs-4">الْعِلْمُ صَيْدٌ وَالْكِتَابَةٌ قَيْدُهُ</p>
        <p class="m-0 text-center fs-4">قَيِّدْ صُيُوْدَكَ بِالْحِبَالِ الْوَثِقَةِ</p>
        <p class="m-0 text-center mt-2">
          Ilmu itu buruan dan tulisan adalah talinya, ikatlah buruanmu dengan tali yang kuat
        </p>
      </div>
    </article>
  </header>
  <main class="ps-3 pe-3" style="padding-top: 15rem">
    <section class="section">
      <h4 class="mb-3">Kitab-Kitab</h4>
      <div class="row row-gap-3">
        <div v-for="item in data" :key="item.id" class="col-3 cursor">
          <div class="content text-center">
            <div
              @click="router.push('/' + item.slug)"
              class="image bg-success bg-opacity-50 mx-auto rounded-circle d-flex justify-content-center align-items-center"
              style="width: 60px; height: 60px"
            >
              <span class="opacity-75" style="font-size: 1.5rem">{{ item.image }}</span>
            </div>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- <div class="bg-success bg-gradient p-5 rounded-bottom-5 border-bottom border-5 text-light">
    <h1 class="text-center font-aref" style="font-size: 5rem">الْبَاقِيْ</h1>
    <h3 class="text-center mt-4">Al-Baqi</h3>
    <div class="position-absolute" style="top: 0.7rem; right: 1rem">
      <Toggle />
    </div>
  </div>
  <div class="container mt-4">
    <div class="row row-gap-3">
      <div v-for="item in data" :key="item.id" class="col-3 cursor">
        <div class="content text-center">
          <div
            @click="router.push('/' + item.slug)"
            class="image bg-success bg-opacity-50 mx-auto rounded-circle d-flex justify-content-center align-items-center"
            style="width: 60px; height: 60px"
          >
            <span class="opacity-75" style="font-size: 1.5rem">{{ item.image }}</span>
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
  </div> -->
</template>
