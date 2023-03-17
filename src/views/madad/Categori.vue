<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { data } from '../../constans/index.js'
</script>
<template>
  <div v-for="item in data" :key="item.id" class="row row-gap-4 mt-3">
    <router-link
      class="col-12 nav-link"
      v-for="item in item.category"
      :key="item.id"
      :to="item.link"
    >
      <div class="border p-3 shadow-sm rounded d-flex align-items-center justify-content-center">
        <h4 class="m-0">{{ item.title }}</h4>
      </div>
    </router-link>
  </div>
</template>
