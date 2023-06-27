<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
// import Toggle from '../components/Toggle.vue'
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
  <header class="header px-3">
    <div class="nav d-flex align-items-center justify-content-end" style="height: 3.5rem">
      <!-- <Toggle /> -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          d="M6.75 2.5C9.09721 2.5 11 4.40279 11 6.75V11H6.75C4.40279 11 2.5 9.09721 2.5 6.75C2.5 4.40279 4.40279 2.5 6.75 2.5ZM9 9V6.75C9 5.50736 7.99264 4.5 6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75C4.5 7.99264 5.50736 9 6.75 9H9ZM6.75 13H11V17.25C11 19.5972 9.09721 21.5 6.75 21.5C4.40279 21.5 2.5 19.5972 2.5 17.25C2.5 14.9028 4.40279 13 6.75 13ZM6.75 15C5.50736 15 4.5 16.0074 4.5 17.25C4.5 18.4926 5.50736 19.5 6.75 19.5C7.99264 19.5 9 18.4926 9 17.25V15H6.75ZM17.25 2.5C19.5972 2.5 21.5 4.40279 21.5 6.75C21.5 9.09721 19.5972 11 17.25 11H13V6.75C13 4.40279 14.9028 2.5 17.25 2.5ZM17.25 9C18.4926 9 19.5 7.99264 19.5 6.75C19.5 5.50736 18.4926 4.5 17.25 4.5C16.0074 4.5 15 5.50736 15 6.75V9H17.25ZM13 13H17.25C19.5972 13 21.5 14.9028 21.5 17.25C21.5 19.5972 19.5972 21.5 17.25 21.5C14.9028 21.5 13 19.5972 13 17.25V13ZM15 15V17.25C15 18.4926 16.0074 19.5 17.25 19.5C18.4926 19.5 19.5 18.4926 19.5 17.25C19.5 16.0074 18.4926 15 17.25 15H15Z"
        ></path>
      </svg>
    </div>
  </header>
  <section class="section">
    <div class="row mt-4">
      <div class="col-9">
        <div class="text-center mt-4">
          <h1 class="nav_logo font-aref text-decoration-none text-success" style="font-size: 5rem">
            الْبَاقِيْ
          </h1>
          <p class="text-success" style="font-size: 2rem">Al-Baqi'</p>

          <div class="mt-5">
            <span class="text-secondary">&#169; Alabim 2023. All right reserved</span>
          </div>
        </div>
      </div>
      <!-- menu -->
      <div class="col-3">
        <div class="menu rounded-start-5 bg-success p-4 d-grid justify-content-center gap-4">
          <div @click="router.push('madad')" class="menu-item text-center">
            <div>
              <div
                class="menu-icon bg-success-subtle p-3 rounded-circle d-grid justify-content-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#5C8984"
                    d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Khulasoh</span>
          </div>
          <div @click="router.push('majmu')" class="menu-item text-center">
            <div>
              <div
                class="menu-icon bg-success-subtle p-3 rounded-circle d-grid justify-content-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#5C8984"
                    d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Majmu'</span>
          </div>
          <div @click="router.push('/majmu/tahlil-kubur')" class="menu-item text-center">
            <div>
              <div
                class="menu-icon bg-success-subtle p-3 rounded-circle d-grid justify-content-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#5C8984"
                    d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Tahlil</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <header
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
  </header> -->
  <main class="ps-3 pe-3 mt-4">
    <!-- begin:kitab-kitab  -->
    <!-- <section class="section">
      <h4 class="m-0">Kitab-kitab</h4>
      <hr class="mt-0 text-secondary" />
      <div class="row row-gap-3"> -->
    <!-- begin:kitab Khulasoh -->
    <!-- <div class="col-3 position-relative">
          <div class="content text-center">
            <div
              @click="router.push('madad')"
              class="bg-gradient-first-color-alt cursor rounded-circle mx-auto d-grid justify-content-center align-items-center"
              style="width: 50px; height: 50px"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="white"
                  d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"
                ></path>
              </svg>
            </div>
            <span>Khulasoh</span>
          </div>
        </div> -->
    <!-- end:kitab Khulasoh -->
    <!-- begin:kitab Majmuk -->
    <!-- <div class="col-3 position-relative">
          <div class="content text-center">
            <div
              @click="router.push('majmu')"
              class="bg-gradient-first-color-alt cursor rounded-circle mx-auto d-grid justify-content-center align-items-center"
              style="width: 50px; height: 50px"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="white"
                  d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM16 15H13V16H11V15H8V19H16V15ZM8 7V13H11V12H13V13H16V7H8ZM6 13V7H4V13H6ZM18 13H20V7H18V13ZM6 15H4V19H6V15ZM18 15V19H20V15H18ZM9 3V5H15V3H9Z"
                ></path>
              </svg>
            </div>
            <span>Majmu'</span>
          </div>
        </div> -->
    <!-- end:kitab Majmuk -->
    <!-- begin:kitab Tahlil -->
    <!-- <div class="col-3 position-relative">
          <div class="content text-center">
            <div
              @click="router.push('/majmu/tahlil-kubur')"
              class="bg-gradient-first-color-alt cursor rounded-circle mx-auto d-grid justify-content-center align-items-center"
              style="width: 50px; height: 50px"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="white"
                  d="M6 12H18V8H14V4H6V12ZM4 12V2.9954C4 2.44565 4.44484 2 4.99558 2H15L19.9997 7L20 12H22V14H2V12H4ZM3 16H5V22H3V16ZM19 16H21V22H19V16ZM15 16H17V22H15V16ZM11 16H13V22H11V16ZM7 16H9V22H7V16Z"
                ></path>
              </svg>
            </div>
            <span>Tahlil</span>
          </div>
        </div> -->
    <!-- end:kitab Tahlil -->
    <!-- </div>
    </section> -->
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
