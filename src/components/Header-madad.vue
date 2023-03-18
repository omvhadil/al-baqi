<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <nav class="navbar navbar-dark bg-success bg-gradient position-fixed top-0 start-0 w-100">
    <div class="container d-flex align-items-center">
      <!-- <div style="width: 45px; height: 45px">
        <img src="../../public/logo.png" alt="Khairiyah" />
      </div> -->
      <h1
        @click="router.push('/')"
        class="text-center m-0 p-1"
        style="font-size: 2rem; font-family: 'Aref Ruqaa', serif !important"
      >
        الْخَيْرِيَة
      </h1>
      <h3 class="text-white m-0">خُلآصَةُ المَدَدًا النَّبَوِى</h3>
    </div>
  </nav>
</template>
