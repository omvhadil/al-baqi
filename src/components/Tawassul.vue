<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { dataKyai } from '../constans/index'
</script>
<template>
  <div
    style="color: #fff; cursor: pointer"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#tawassul"
    aria-controls="tawassul"
  >
    <!-- begin:icon -->
    <div class="d-flex">
      <span class="text-secondary me-2">Tawassul</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="#9c9898"
          d="M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H20C20.5523 5 21 5.44772 21 6V9H4V18.996L6 11H22.5L20.1894 20.2425C20.0781 20.6877 19.6781 21 19.2192 21H3Z"
        ></path>
      </svg>
    </div>
    <!-- end:icon -->
  </div>

  <div
    class="offcanvas offcanvas-end"
    data-bs-backdrop="static"
    tabindex="-1"
    id="tawassul"
    aria-labelledby="staticBackdropLabel"
    style="width: 300px"
  >
    <div class="offcanvas-header bg-gradient-first-color-alt text-white">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Tawassul Maqbaroh</h5>
      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div v-for="kyai in dataKyai" :key="kyai.id" class="row mb-4">
        <h6 class="fw-bold text-first-color mb-0">{{ kyai.daerah }}</h6>
        <div class="">
          <p v-for="item in kyai.ulama" :key="item.id" class="m-0">- {{ item.nama_ulama }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
