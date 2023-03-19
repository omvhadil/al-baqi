<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { data } from '../../constans/index.js'
import { useRoute } from 'vue-router'
import Header from '../../components/Header.vue'

const kitabId = useRoute().params.kitab
const categoryId = useRoute().params.category
const kitab = data.find((item) => item.slug === kitabId)
const category = kitab.category.find((item) => item.slug === categoryId)
</script>
<template>
  <Header :title="kitab.arab" />
  <div class="d-flex bg-success p-3 gap-2 position-fixed w-100 start-0">
    <button class="btn btn-success border w-100" type="button">Yasin</button>
    <button class="btn btn-success w-100" type="button">Waqiah</button>
  </div>
  <div class="container mt-5 pt-5">
    <div class="pt-3">
      <div class="text-center mb-3">
        <h4></h4>
        <div v-if="category?.slug == 'fardhu'">
          <h4 class="m-0">﴾ Dzikir Setelah Sholat Fardhu ﴿</h4>
          <h4 class="m-0">🍀 Khusus 🍀</h4>
          <span class="m-0">Al-Habib Umar Bin Muhammad BSA</span>
        </div>
        <div v-if="category?.slug == 'subuh'">
          <h4 class="m-0">Dzikir Setelah Sholat Subuh</h4>
          <h4 class="m-0">🍀 Wirdul Lathif 🍀</h4>
          <span class="m-0">Al-Imam Abdullah Bin Alwi Al-Haddad</span>
        </div>
        <div v-if="category?.slug == 'dzuhur'">
          <h4 class="m-0">Dzikir Setelah Sholat Dzuhur</h4>
          <h4 class="m-0">🍀 Hizbun Nashar 🍀</h4>
          <span class="m-0">Al-Imam Abdullah Bin Alwi Al-Haddad</span>
        </div>
        <div v-if="category?.slug == 'ashar'">
          <h4 class="m-0">Dzikir Setelah Sholat Asar</h4>
          <h4 class="m-0">🍀 Hizbul Bahr 🍀</h4>
          <span class="m-0">Al-Imam Abi Hasan Asy-Syadzili</span>
        </div>
        <div v-if="category?.slug == 'maghrib'">
          <h4 class="m-0">Dzikir Setelah Sholat Magrib</h4>
          <h4 class="m-0">🍀 Ratib Al-Haddad 🍀</h4>
          <span class="m-0">Al-Imam Abdullah Bin Alwi Al-Haddad</span>
        </div>
        <div v-if="category?.slug == 'isya'">
          <h4 class="m-0">Dzikir Setelah Sholat Isya'</h4>
          <h4 class="m-0">🍀 Wirid 🍀</h4>
          <span class="m-0">Al-Imam Abu Bakar Bin Addurrahman Assegaf</span>
        </div>
        <h4></h4>
      </div>
      <table class="table">
        <tbody>
          <div v-for="item in category?.dzikri" :key="item.id">
            <tr v-for="item in item?.bait_bait" :key="item.id">
              <td class="col-11 text-end" :class="item.arab ? 'border-bottom' : ''">
                <h1 class="m-0 text-white py-3">{{ item.arab }}</h1>
              </td>
            </tr>
          </div>
        </tbody>
      </table>
    </div>
  </div>
</template>
