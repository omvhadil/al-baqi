<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { data } from '../../constans/index.js'
</script>
<template>
  <div class="mt-3">
    <table class="table table-striped">
      <tbody>
        <div v-for="item in data" :key="item.id">
          <div v-for="item in item.category" :key="item.id">
            <div v-for="item in item.dzikri" :key="item.id">
              <tr v-for="item in item.bait_bait" :key="item.id">
                <td class="col-11 text-end border-bottom">
                  <h2>{{ item.arab }}</h2>
                </td>
              </tr>
            </div>
          </div>
        </div>
      </tbody>
    </table>
  </div>
</template>
