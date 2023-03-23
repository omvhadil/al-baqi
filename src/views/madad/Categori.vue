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
  <div class="container mt-5 pt-4">
    <div class="mb-4 mt-2">
      <input type="search" class="form-control" placeholder="Search" />
    </div>
    <div class="row row-gap-3">
      <div v-for="(item, index) in kitab.category" :key="item.id" class="col-12">
        <div
          @click="router.push('/' + kitabId + '/' + item.slug)"
          class="d-flex shadow-sm rounded overflow-hidden cursor border"
          style="height: 40px"
        >
          <div
            class="d-flex align-items-center justify-content-center bg-success-subtle"
            style="width: 40px"
          >
            <p class="m-0">{{ index + 1 }}</p>
          </div>
          <div class="d-flex align-items-center ps-3">
            <p class="m-0">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
