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
  <nav class="navbar navbar-dark bg-success bg-gradient position-fixed top-0 start-0 w-100 p-0">
    <div class="container d-flex align-items-center p-2">
      <h1
        @click="router.push('/')"
        class="text-center text-light m-0 p-1 font-aref cursor"
        style="font-size: 2rem"
      >
        الْبَاقِيْ
      </h1>
      <h3 class="text-light m-0">{{ data.title }}</h3>
      <Toggle />
    </div>
    <slot name="menu"> </slot>
  </nav>
</template>
