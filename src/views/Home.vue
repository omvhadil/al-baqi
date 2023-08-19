<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import Tawassul from '../components/Tawassul.vue'

const router = useRouter()
</script>
<template>
  <!-- begin:header  -->
  <header class="header px-3">
    <div class="nav d-flex align-items-center justify-content-end gap-4" style="height: 3.5rem">
      <Tawassul />
    </div>
  </header>
  <!-- end:header  -->
  <!-- begin:content  -->
  <section class="section">
    <div class="row mt-4 g-0">
      <!-- begin:icon -->
      <div class="col-9 p-0">
        <div class="text-center mt-4">
          <h1
            class="nav_logo font-aref text-decoration-none text-first-color"
            style="font-size: 5rem"
          >
            الْقَيُّوْمُ
          </h1>
          <p class="text-first-color" style="font-size: 2rem">Maha Mandiri</p>

          <div class="mt-5">
            <span class="text-secondary">&#169; Alabim 2023. All right reserved</span>
          </div>
        </div>
      </div>
      <!-- end:icon -->
      <!-- begin:menu -->
      <div class="col-3 p-0">
        <div
          class="menu rounded-start-5 bg-gradient-first-color py-4 d-grid justify-content-center gap-4"
        >
          <div @click="router.push('madad')" class="menu-item text-center">
            <div>
              <div
                class="cursor menu-icon bg-first-color-alt p-3 rounded-circle d-grid justify-content-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#ffffff"
                    d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Madad</span>
          </div>
          <div @click="router.push('majmu')" class="menu-item text-center">
            <div>
              <div
                class="cursor menu-icon bg-first-color-alt p-3 rounded-circle d-grid justify-content-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#ffffff"
                    d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM16 15H13V16H11V15H8V19H16V15ZM8 7V13H11V12H13V13H16V7H8ZM6 13V7H4V13H6ZM18 13H20V7H18V13ZM6 15H4V19H6V15ZM18 15V19H20V15H18ZM9 3V5H15V3H9Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Majmu'</span>
          </div>
          <div @click="router.push('/majmu/tahlil-kubur')" class="menu-item text-center">
            <div>
              <div
                class="cursor menu-icon bg-first-color-alt p-3 rounded-circle d-grid justify-content-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#ffffff"
                    d="M6 12H18V8H14V4H6V12ZM4 12V2.9954C4 2.44565 4.44484 2 4.99558 2H15L19.9997 7L20 12H22V14H2V12H4ZM3 16H5V22H3V16ZM19 16H21V22H19V16ZM15 16H17V22H15V16ZM11 16H13V22H11V16ZM7 16H9V22H7V16Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Tahlil</span>
          </div>
        </div>
      </div>
      <!-- end:menu -->
    </div>
  </section>
  <!-- end:content  -->
  <main class="ps-3 pe-3 mt-5">
    <div class="border border-dark overflow-hidden rounded-2">
      <h5 class="text-center bg-first-color text-white py-2">Pesan</h5>
      <span class="text-center d-block p-3 fs-5"
        >"Lakukanlah kebaikan sekecil apapun, karna engkau tidak akan pernah tau kebaikan mana yang
        akan memasukkanmu ke dalam SURGA."</span
      >
    </div>
  </main>
</template>
