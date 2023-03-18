<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { madad } from '../../constans/index.js'
import { useRoute } from 'vue-router'

const categoryId = useRoute().params.slug
const category = madad.find((item) => item.slug === categoryId)
</script>
<template>
  <div class="mt-3 pb-5">
    <div class="text-center mb-4 mt-5">
      <h4 v-if="category.slug == 'fardhu'">Dzikir Setelah Sholat Fardhu</h4>
      <h4 v-if="category.slug == 'subuh'" class="m-0">Dzikir Setelah Sholat Subuh</h4>
      <h4 v-if="category.slug == 'subuh'" class="m-0">🍀 Wirdul Lathif 🍀</h4>
      <span v-if="category.slug == 'subuh'" class="m-0">Al-Imam Abdullah Bin Alwi Al-Haddad</span>
      <h4 v-if="category.slug == 'dzuhur'">Dzikir Setelah Sholat Dzuhur</h4>
      <h4 v-if="category.slug == 'ashar'">Dzikir Setelah Sholat Asar</h4>
      <h4 v-if="category.slug == 'maghrib'">Dzikir Setelah Sholat Magrib</h4>
      <h4 v-if="category.slug == 'isya'">Dzikir Setelah Sholat Isya'</h4>
    </div>
    <table class="table">
      <tbody>
        <div v-for="item in category.dzikri" :key="item.id">
          <tr v-for="item in item?.bait_bait" :key="item.id">
            <td class="col-11 text-end" :class="item.arab ? 'border-bottom' : ''">
              <h1 class="m-0 text-white py-3">{{ item.arab }}</h1>
            </td>
          </tr>
        </div>
      </tbody>
    </table>
  </div>
</template>
