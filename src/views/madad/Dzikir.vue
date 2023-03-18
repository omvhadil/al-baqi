<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { madad } from '../../constans/index.js'
import { useRoute } from 'vue-router'

const categoryId = useRoute().params.slug
const category = madad.find((item) => item.slug === categoryId)
console.log(category)

//ambil data sesuai id
</script>
<template>
  <div class="mt-3">
    <h4 v-if="category.slug == 'fardhu'" class="text-center mb-4">Dzikir Setelah Sholat Fardhu</h4>
    <h4 v-if="category.slug == 'subuh'" class="text-center mb-4">Dzikir Setelah Sholat Subuh</h4>
    <h4 v-if="category.slug == 'dzuhur'" class="text-center mb-4">Dzikir Setelah Sholat Dzuhur</h4>
    <h4 v-if="category.slug == 'ashar'" class="text-center mb-4">Dzikir Setelah Sholat Asar</h4>
    <h4 v-if="category.slug == 'maghrib'" class="text-center mb-4">Dzikir Setelah Sholat Magrib</h4>
    <h4 v-if="category.slug == 'isya'" class="text-center mb-4">Dzikir Setelah Sholat Isya'</h4>
    <table class="table text-white">
      <tbody>
        <div v-for="item in category.dzikri" :key="item.id">
          <tr v-for="item in item?.bait_bait" :key="item.id">
            <td class="col-11 text-end">
              <h1 class="m-0 text-white p-2">{{ item.arab }}</h1>
            </td>
          </tr>
        </div>
      </tbody>
    </table>
  </div>
</template>
