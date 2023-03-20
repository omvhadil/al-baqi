<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { data } from '../../constans/index.js'
import { useRoute } from 'vue-router'
import Header from '../../components/Header.vue'
import { ref, computed } from 'vue'

const categoryNumber = ref(0)

const kitabId = useRoute().params.kitab
const categoryId = useRoute().params.category
const kitab = data.find((item) => item.slug === kitabId)
const category = kitab.category.find((item) => item.slug === categoryId)
const dzikri = category.dzikri

const tampilCategory = computed(() => dzikri[categoryNumber.value])
</script>
<template>
  <Header :title="kitab.arab" />
  <div class="d-flex bg-success p-3 gap-2 position-fixed w-100 start-0">
    <button
      v-for="item in category?.dzikri"
      :key="item.id"
      @click="categoryNumber = item.id - 1"
      class="btn btn-success border w-100"
      type="button"
    >
      {{ item.title }}
    </button>
  </div>
  <div class="container mt-5 pt-5">
    <div class="pt-4">
      <div class="text-center mb-3">
        <div>
          <h4 class="m-0">﴾ {{ category.title }} ﴿</h4>
          <h4 class="m-0">🍀 {{ tampilCategory?.name }} 🍀</h4>
          <span class="m-0">{{ tampilCategory?.subName }}</span>
        </div>
      </div>
      <table class="table">
        <tbody>
          <tr v-for="item in tampilCategory?.bait_bait" :key="item.id">
            <td class="col-11 text-end" :class="item.arab ? 'border-bottom' : ''">
              <h1 class="m-0 text-white py-1">{{ item.arab }}</h1>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
