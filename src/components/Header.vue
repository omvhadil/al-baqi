<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import Toggle from '../components/Toggle.vue'

const router = useRouter()
const data = defineProps({
  title: {
    type: String,
    default: 'الْبَاقِيْ'
  }
})
</script>
<template>
  <nav
    class="bg-gradient-first-color position-fixed top-0 start-0 w-100 p-0"
    style="height: 3.5rem"
  >
    <div class="container d-flex align-items-center p-2 justify-content-between mb-2">
      <div
        @click="router.back()"
        class="text-center text-light m-0 p-1 font-aref cursor"
        style="font-size: 2rem"
      >
        <div class="bg-white icon-back" style="width: 30px; height: 15px"></div>
      </div>
      <h3 class="text-light m-0">{{ data.title }}</h3>
      <Toggle />
    </div>
    <slot name="menu"> </slot>
  </nav>
</template>
