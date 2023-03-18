<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { madad } from '../../constans/index.js'
</script>
<template>
  <div v-for="item in madad" :key="item.id" class="row row-gap-4 mt-3">
    <div class="col-12">
      <router-link class="nav-link" :to="item.link">
        <div class="border p-3 shadow-sm rounded d-flex align-items-center justify-content-center">
          <h4 class="m-0">{{ item.title }}</h4>
        </div>
      </router-link>
    </div>
  </div>
</template>
