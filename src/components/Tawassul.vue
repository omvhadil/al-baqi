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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        fill="#696969"
        d="M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V18H18V10ZM20 18.6667L20.4 19.2C20.5657 19.4209 20.5209 19.7343 20.3 19.9C20.2135 19.9649 20.1082 20 20 20H4C3.72386 20 3.5 19.7761 3.5 19.5C3.5 19.3918 3.53509 19.2865 3.6 19.2L4 18.6667V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"
      ></path>
    </svg>
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
