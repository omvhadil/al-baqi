<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import { madad } from '../../constans/index.js'

const router = useRouter()
</script>
<template>
  <div class="container mt-5">
    <div class="row row-gap-3">
      <div v-for="item in madad" :key="item.id" class="col-12">
        <div
          @click="router.push('/madad/' + item.slug)"
          class="text-center border p-3 bg-secondary bg-opacity-25"
        >
          <h5 class="m-0">{{ item.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
