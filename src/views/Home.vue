<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
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
    <!-- begin:kitab-kitab  -->
    <section class="section">
      <h4 class="mb-3"><u>Kitab-kitab</u></h4>
      <div class="row row-gap-3">
        <!-- begin:kitab Khulasoh -->
        <div class="col-3 position-relative">
          <div class="content text-center">
            <div
              @click="router.push('majmu')"
              class="bg-warning cursor rounded-circle mx-auto d-grid justify-content-center align-items-center"
              style="width: 60px; height: 60px"
            >
              <!-- begin:icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="white"
                  d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"
                ></path>
              </svg>
              <!-- end:icon -->
            </div>
            <span>Khulasoh</span>
          </div>
        </div>
        <!-- end:kitab Khulasoh -->
        <!-- begin:kitab Majmuk -->
        <div class="col-3 position-relative">
          <div class="content text-center">
            <div
              @click="router.push('madad')"
              class="bg-info cursor rounded-circle mx-auto d-grid justify-content-center align-items-center"
              style="width: 60px; height: 60px"
            >
              <!-- begin:icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="white"
                  d="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"
                ></path>
              </svg>
              <!-- end:icon -->
            </div>
            <span>Khulasoh</span>
          </div>
        </div>
      </div>
    </section>
    <!-- end:kitab-kitab  -->
    <!-- begin:catatan  -->
    <section class="section">
      <h4 class="mb-4 mt-4"><u>Catatan</u></h4>
    </section>
    <!-- end:catatan  -->
  </main>
</template>
