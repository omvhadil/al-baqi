<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <div class="container">
    <div class="icon pt-3">
      <div class="bg-success p-3 rounded-circle mx-auto" style="width: 100px; height: 100px">
        <img src="../assets/logo.png" style="width: 100%" />
      </div>
      <h4 class="text-center mt-2 text-success">AL-KHAIRIYAH</h4>
    </div>
    <div class="row row-gap-3 mt-5">
      <div class="col-6 overflow-hidden" style="height: 250px">
        <div @click="router.push('/madad')" class="content-cover">
          <img src="../assets/madad.jpg" />
        </div>
      </div>
      <div class="col-6 overflow-hidden" style="height: 250px">
        <div class="content-cover">
          <img src="../assets/majmu.png" />
        </div>
      </div>
      <div class="col-6 overflow-hidden" style="height: 250px">
        <div class="content-cover">
          <img src="../assets/simtut.jpg" />
        </div>
      </div>
      <div class="col-6 overflow-hidden" style="height: 250px">
        <div class="content-cover">
          <img src="../assets/dibak.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>
