<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const data = defineProps({
  title: {
    type: String,
    default: 'الْخَيْرِيَة'
  }
})
</script>
<template>
  <nav class="navbar navbar-dark bg-success bg-gradient position-fixed top-0 start-0 w-100">
    <div class="container d-flex align-items-center">
      <h1 @click="router.push('/')" class="text-center m-0 p-1 font-aref" style="font-size: 2rem">
        الْخَيْرِيَة
      </h1>
      <h3 class="text-white m-0">{{ data.title }}</h3>
    </div>
  </nav>
</template>
