<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import Toggle from '../components/Toggle.vue'
import { dataKyai } from '../constans/index'

const ulamaPatokan = dataKyai.find((item) => item.id == 1)
const ulamaBrani = dataKyai.find((item) => item.id == 2)
const ulamaGenggong = dataKyai.find((item) => item.id == 3)
const ulamaKalikajar = dataKyai.find((item) => item.id == 4)
const ulamaKaranganyar = dataKyai.find((item) => item.id == 5)
const ulamaAlastengah = dataKyai.find((item) => item.id == 6)
const ulamaAlassumur = dataKyai.find((item) => item.id == 7)
const ulamaBhinor = dataKyai.find((item) => item.id == 8)
const ulamaBesuki = dataKyai.find((item) => item.id == 9)
const ulamaPecaron = dataKyai.find((item) => item.id == 10)

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
              @click="router.push('madad')"
              class="bg-gradient-first-color-alt cursor rounded-circle mx-auto d-grid justify-content-center align-items-center"
              style="width: 50px; height: 50px"
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
              @click="router.push('majmu')"
              class="bg-gradient-first-color-alt cursor rounded-circle mx-auto d-grid justify-content-center align-items-center"
              style="width: 50px; height: 50px"
            >
              <!-- begin:icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="white"
                  d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM16 15H13V16H11V15H8V19H16V15ZM8 7V13H11V12H13V13H16V7H8ZM6 13V7H4V13H6ZM18 13H20V7H18V13ZM6 15H4V19H6V15ZM18 15V19H20V15H18ZM9 3V5H15V3H9Z"
                ></path>
              </svg>
              <!-- end:icon -->
            </div>
            <span>Majmu'</span>
          </div>
        </div>
        <!-- end:kitab Majmuk -->
        <!-- begin:kitab Tahlil -->
        <div class="col-3 position-relative">
          <div class="content text-center">
            <div
              @click="router.push('/majmu/tahlil-kubur')"
              class="bg-gradient-first-color-alt cursor rounded-circle mx-auto d-grid justify-content-center align-items-center"
              style="width: 50px; height: 50px"
            >
              <!-- begin:icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="white"
                  d="M6 12H18V8H14V4H6V12ZM4 12V2.9954C4 2.44565 4.44484 2 4.99558 2H15L19.9997 7L20 12H22V14H2V12H4ZM3 16H5V22H3V16ZM19 16H21V22H19V16ZM15 16H17V22H15V16ZM11 16H13V22H11V16ZM7 16H9V22H7V16Z"
                ></path>
              </svg>
              <!-- end:icon -->
            </div>
            <span>Tahlil</span>
          </div>
        </div>
        <!-- end:kitab Tahlil -->
      </div>
    </section>
    <!-- end:kitab-kitab  -->
    <!-- begin:catatan  -->
    <section class="section mt-4 pb-4">
      <h4 class="m-0">Catatan</h4>
      <hr class="m-0 text-secondary" />
      <div class="row mt-3">
        <div class="accordion" id="accordionExample">
          <!-- patokan -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Patokan - Kraksaan - Probolinggo
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ul>
                  <li v-for="item in ulamaPatokan.ulama" :key="item.id">{{ item.nama_ulama }}</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- brani -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Brani Kulon - Maron - Probolinggo
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <li v-for="item in ulamaBrani.ulama" :key="item.id">{{ item.nama_ulama }}</li>
              </div>
            </div>
          </div>
          <!-- genggong  -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Genggong - Pajarakan - Probolinggo
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <li v-for="item in ulamaGenggong.ulama" :key="item.id">{{ item.nama_ulama }}</li>
              </div>
            </div>
          </div>
          <!-- kalikajar -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                Kalikajar - Paiton - Probolinggo
              </button>
            </h2>
            <div
              id="collapsefour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <li v-for="item in ulamaKalikajar.ulama" :key="item.id">{{ item.nama_ulama }}</li>
              </div>
            </div>
          </div>
          <!-- karanganyar  -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                Karanganyar - Paiton - Probolinggo
              </button>
            </h2>
            <div
              id="collapsefive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <li v-for="item in ulamaKaranganyar.ulama" :key="item.id">{{ item.nama_ulama }}</li>
              </div>
            </div>
          </div>
          <!-- alastengah -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsesix"
                aria-expanded="false"
                aria-controls="collapsesix"
              >
                Alastengah - Besuk - Probolinggo
              </button>
            </h2>
            <div
              id="collapsesix"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <li v-for="item in ulamaAlastengah.ulama" :key="item.id">{{ item.nama_ulama }}</li>
              </div>
            </div>
          </div>
          <!-- alassumur -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseseven"
                aria-expanded="false"
                aria-controls="collapseseven"
              >
                Alassumur Kulon - Kraksaan - Probolinggo
              </button>
            </h2>
            <div
              id="collapseseven"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <li v-for="item in ulamaAlassumur.ulama" :key="item.id">{{ item.nama_ulama }}</li>
              </div>
            </div>
          </div>
          <!-- Bhinor -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse8"
                aria-expanded="false"
                aria-controls="collapse8"
              >
                Bhinor - Paiton - Probolinggo
              </button>
            </h2>
            <div
              id="collapse8"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <li v-for="item in ulamaBhinor.ulama" :key="item.id">{{ item.nama_ulama }}</li>
              </div>
            </div>
          </div>
          <!-- Besuki -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse9"
                aria-expanded="false"
                aria-controls="collapse9"
              >
                Besuki - Besuki - Situbondo
              </button>
            </h2>
            <div
              id="collapse9"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <li v-for="item in ulamaBesuki.ulama" :key="item.id">{{ item.nama_ulama }}</li>
              </div>
            </div>
          </div>
          <!-- Pecaron -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse10"
                aria-expanded="false"
                aria-controls="collapse10"
              >
                Pecaron - Pasir Putih - Situbondo
              </button>
            </h2>
            <div
              id="collapse10"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <li v-for="item in ulamaPecaron.ulama" :key="item.id">{{ item.nama_ulama }}</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
