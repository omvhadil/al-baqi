<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { data } from '../../constans/index.js'
</script>
<template>
  <div class="mt-3">
    <h4 class="m-0 mb-3 text-center">Dzikir Setelah Sholat Fardhu</h4>
    <div v-for="item in data" :key="item.id">
      <table v-for="item in item.category" :key="item.id" class="table table-striped">
        <tbody v-for="item in item.dzikri" :key="item.id">
          <tr v-for="item in item.bait_bait" :key="item.id">
            <td class="col-11 text-end">
              <h2 class="m-0">{{ item.arab }}</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
