<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { data } from '../../constans/index.js'
</script>
<template>
  <div v-for="item in data" :key="item.id" class="row row-gap-4 mt-4">
    <router-link
      class="col-12 nav-link"
      v-for="item in item.category"
      :key="item.id"
      :to="item.link"
    >
      <div class="border text-center p-2 shadow-sm rounded">
        <h3>{{ item.arab }}</h3>
      </div>
    </router-link>
  </div>
</template>
