<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import { data } from '../constans/index.js'
const router = useRouter()
</script>
<template>
  <header
    class="header bg-success bg-gradient position-fixed"
    style="max-width: 450px; height: 6rem"
  >
    <nav
      class="nav ps-3 pe-3 d-flex align-items-center justify-content-between"
      style="height: 3.5rem"
    >
      <a href="#" class="nav_logo font-aref text-decoration-none text-white" style="font-size: 2rem"
        >الْبَاقِيْ</a
      >
    </nav>
    <article class="ps-4 pe-4">
      <div>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="content_articl bg-white p-3 rounded shadow-sm">
                <p class="m-0 text-center fs-4 text-success">
                  الْعِلْمُ صَيْدٌ وَالْكِتَابَةٌ قَيْدُهُ
                </p>
                <p class="m-0 text-center fs-4 text-success">
                  قَيِّدْ صُيُوْدَكَ بِالْحِبَالِ الْوَاثِقَةِ
                </p>
                <p class="m-0 text-center mt-2">
                  Ilmu itu buruan dan tulisan adalah talinya, ikatlah buruanmu dengan tali yang kuat
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="content_articl bg-white p-3 rounded shadow-sm">
                <p class="m-0 text-center fs-4 text-primary">
                  وَالْأُسُدُ لَوْلاَ فِرَاقُ الْغَابِ مَاافْتَرَسَتْ
                </p>
                <p class="m-0 text-center fs-4 text-primary">
                  وَالسَّهْمُ لَوْلاَ فِرَاقُ الْقَوْسِ لَمْ يُصِبْ
                </p>
                <p class="m-0 text-center mt-2">
                  Singa-singa bila tak keluar dari sarangnya tak dapat mangsa, anak panah bila tidak
                  lepas dari busurnya tak akan mengenai sasaran.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="content_articl bg-white p-3 rounded shadow-sm">
                <p class="m-0 text-center fs-4 text-danger">
                  الْوَقْتُ كَالسَّيْفِ إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ
                </p>
                <p class="m-0 text-center mt-2">
                  Waktu bagaikan pedang, bila kamu tidak memotongnya dia akan memotongmu.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!-- <div class="content_articl bg-white p-3 rounded shadow-sm">
        <p class="m-0 text-center fs-4">الْعِلْمُ صَيْدٌ وَالْكِتَابَةٌ قَيْدُهُ</p>
        <p class="m-0 text-center fs-4">قَيِّدْ صُيُوْدَكَ بِالْحِبَالِ الْوَثِقَةِ</p>
        <p class="m-0 text-center mt-2">
          Ilmu itu buruan dan tulisan adalah talinya, ikatlah buruanmu dengan tali yang kuat
        </p>
      </div> -->
    </article>
  </header>
  <main class="ps-3 pe-3" style="padding-top: 15rem">
    <section class="section">
      <h4 class="mb-3">Kitab-kitab</h4>
      <div class="row row-gap-3">
        <div v-for="item in data" :key="item.id" class="col-3 cursor">
          <div class="content text-center">
            <div
              @click="router.push('/' + item.slug)"
              class="image bg-success bg-opacity-50 mx-auto rounded-circle d-flex justify-content-center align-items-center"
              style="width: 50px; height: 50px"
            >
              <span class="opacity-75" style="font-size: 2.5rem">{{ item.image }}</span>
            </div>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
