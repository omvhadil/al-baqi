<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { data } from '../../constans/index.js'
import Header from '../../components/Header.vue'

const router = useRouter()
const kitabId = useRoute().params.kitab
const kitab = data.find((item) => item.slug === kitabId)
</script>
<template>
  <Header :title="kitab.arab" />
  <div class="container mt-5 pt-5">
    <div class="row row-gap-3">
      <div v-for="item in kitab.category" :key="item.id" class="col-12">
        <div
          @click="router.push('/' + kitabId + '/' + item.slug)"
          class="text-center border p-2 bg-secondary bg-opacity-25"
        >
          <h3 class="m-0">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
