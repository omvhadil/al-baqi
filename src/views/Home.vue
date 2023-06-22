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
      </div>
    </section>
    <!-- end:kitab-kitab  -->
    <!-- begin:catatan  -->
    <section class="section mt-4 pb-4">
      <h4 class="m-0">Catatan</h4>
      <hr class="m-0 text-secondary" />
      <div class="row gap-2">
        <!-- begin:Kampung Arab/patokan -->
        <div class="col-12 mt-2">
          <div class="card p-1 d-flex">
            <div>
              <span class="badge bg-secondary">Patokan - Kraksaan - Probolinggo</span>
            </div>
            <div class="mt-2">
              <ul>
                <li>Habib Hasan Bin Umar Al-Habsyi</li>
                <li>Habib Alwy Bin Hasan Al-Habsyi</li>
                <li>Habib Hasyim Al-Habsyi</li>
                <li>Habib Hamid bin Syaikh Al-Habsyi</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end:Kampung Arab/patokan -->
        <!-- begin:Brani Kulon -->
        <div class="col-12 mt-2">
          <div class="card p-1 d-flex">
            <div>
              <span class="badge bg-secondary">Brani Kulon - Maron - Probolinggo</span>
            </div>
            <div class="mt-2">
              <ul>
                <li>Habib Husein Bin Hadi Al-Hamid</li>
                <li>Habib Tholib Bin Husein Al-Hamid</li>
                <li>Habib Idrus Bin Husya Al-Hamid</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end:Brani Kulon -->
        <!-- begin:Genggong -->
        <div class="col-12 mt-2">
          <div class="card p-1 d-flex">
            <div>
              <span class="badge bg-secondary">Genggong - Pajarakan - Probolinggo</span>
            </div>
            <div class="mt-2">
              <ul>
                <li>KH. Zainul Abidin</li>
                <li>KH. Muhammad Hasan Genggong</li>
                <li>KH. Hasan Saifourridzal</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end:Genggong -->
        <!-- begin:Kalikajar -->
        <div class="col-12 mt-2">
          <div class="card p-1 d-flex">
            <div>
              <span class="badge bg-secondary">Kalikajar Kulon - Paiton - Probolinggo</span>
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
                <li>NH. Umi Sa'adah</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end:Kalikajar -->
        <!-- begin:Karanganyar -->
        <div class="col-12 mt-2">
          <div class="card p-1 d-flex">
            <div>
              <span class="badge bg-secondary">Karanganyar - Paiton - Probolinggo</span>
            </div>
            <div class="mt-2">
              <ul>
                <li>KH. Zaini Abdul Mun'im</li>
                <li>KH. Moh. Hasyim Zaini</li>
                <li>KH. Abd. Wahid Zaini</li>
                <li>KH. Hsan Abdul Wafi</li>
                <li>KH. Abdul Haq Zaini</li>
                <li>KH. Nur Chotim Zaini</li>
                <li>KH. Faqih Zawawi</li>
                <li>KH. Muhammad Hefni Mahfudz</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end:Karanganyar -->
        <!-- begin:Alastengah -->
        <div class="col-12 mt-2">
          <div class="card p-1 d-flex">
            <div>
              <span class="badge bg-secondary">Alastengah - Besuk - Probolinggo</span>
            </div>
            <div class="mt-2">
              <ul>
                <li>Habib Ahmad bin Abdurrahman Ba'aly</li>
                <li>Habib Abdurrahman bin Alwy Ba'aly</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end:Alastengah -->
        <!-- begin:Alassumur -->
        <div class="col-12 mt-2">
          <div class="card p-1 d-flex">
            <div>
              <span class="badge bg-secondary">Alassumur Kulon - Kraksaan - Probolinggo</span>
            </div>
            <div class="mt-2">
              <ul>
                <li>KH. Abdullah Mighni</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end:Alassumur -->
      </div>
    </section>
  </main>
</template>
