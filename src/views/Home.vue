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
      <h4 class="m-0">Kitab-kitab</h4>
      <hr class="mt-0 text-secondary" />
      <div class="row row-gap-3">
        <!-- begin:kitab Khulasoh -->
        <div class="col-3 position-relative">
          <div class="content text-center">
            <div
              @click="router.push('majmu')"
              class="bg-gradient-first-color-alt cursor rounded-circle mx-auto d-grid justify-content-center align-items-center"
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
              class="bg-gradient-first-color-alt cursor rounded-circle mx-auto d-grid justify-content-center align-items-center"
              style="width: 60px; height: 60px"
            >
              <!-- begin:icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="white"
                  d="M5 8V20H19V8H5ZM5 6H19V4H5V6ZM20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 10H11V14H7V10ZM7 16H17V18H7V16ZM13 11H17V13H13V11Z"
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
    <section class="section mt-4 pb-4">
      <h4 class="m-0">Catatan</h4>
      <hr class="m-0 text-secondary" />
      <div class="row gap-2">
        <!-- begin:catatan 1 -->
        <div class="col-12 mt-2">
          <div class="card p-1 d-flex">
            <div>
              <span class="badge bg-secondary">Patokan / Kampung Arab</span>
            </div>
            <div class="mt-2">
              <ul>
                <li>Habib Hasan Bin Umar Al-Habsyi</li>
                <li>Habib Alwy Bin Hasan Al-Habsyi</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end:catatan 1 -->
        <!-- begin:catatan 2 -->
        <div class="col-12 mt-2">
          <div class="card p-1 d-flex">
            <div>
              <span class="badge bg-secondary">Brani Kulon</span>
            </div>
            <div class="mt-2">
              <ul>
                <li>Habib Husein Bin Hadi Al-Hamid</li>
                <li>Habib Tholib Bin Husein Al-Hamid</li>
                <li>Habib Idrus Bin Husein Al-Hamid</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end:catatan 2 -->
        <!-- begin:catatan 3 -->
        <div class="col-12 mt-2">
          <div class="card p-1 d-flex">
            <div>
              <span class="badge bg-secondary">Genggong</span>
            </div>
            <div class="mt-2">
              <ul>
                <li>KH. Muhammad Hasan Genggong</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end:catatan 3 -->
        <!-- begin:catatan 4 -->
        <div class="col-12 mt-2">
          <div class="card p-1 d-flex">
            <div>
              <span class="badge bg-secondary">Kalikajar</span>
            </div>
            <div class="mt-2">
              <ul>
                <li>KH. Muhammad Hasyim Minu</li>
                <li>KH. Hasan Abdul Jalal Bin KH. Minu</li>
                <li>NH. Hiddun</li>
                <li>NH. Siti Maryam / NH. Minu</li>
                <li>NH. Ummu Salamah Bin KH. Minu</li>
              </ul>
              <ul>
                <li>KH. Nuruddin Musyiri</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end:catatan 4 -->
      </div>
    </section>
  </main>
</template>
