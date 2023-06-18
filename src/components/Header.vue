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
  <nav class="bg-gradient-first-color-alt position-fixed top-0 start-0 w-100 p-0">
    <div
      class="container d-flex align-items-center p-2 justify-content-between"
      style="height: 3.5rem"
    >
      <div @click="router.back()" class="cursor">
        <!-- begin:icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="white"
            d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
          ></path>
        </svg>
        <!-- end:icon -->
      </div>
      <h3 class="text-light m-0">{{ data.title }}</h3>
      <Toggle />
    </div>
    <slot name="menu"> </slot>
  </nav>
</template>
