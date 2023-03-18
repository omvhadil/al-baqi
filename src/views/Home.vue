<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <div class="bg-success bg-gradient p-5 rounded-bottom-5 border-bottom border-5">
    <div class="logo mx-auto" style="width: 100px; height: 100px">
      <img src="../assets/logo.png" alt="" />
    </div>
    <h3 class="text-center">AL-khairiyah</h3>
  </div>
  <div class="container mt-4">
    <div class="row row-gap-3">
      <div class="col-4">
        <div
          @click="router.push('/madad')"
          class="text-center border bg-secondary bg-opacity-25"
          style="height: 200px"
        >
          <img
            src="https://archive.org/services/img/habib-umar-al-khulasoh-2019/full/pct:200/0/default.jpg"
            alt=""
          />
          <h5>Kholasoh</h5>
        </div>
      </div>
      <div class="col-4">
        <div class="text-center border bg-secondary bg-opacity-25" style="height: 200px">
          <img
            src="https://www.sinarbarualgensindo.com/wp-content/uploads/2020/06/Majmu-luks.jpg"
            alt=""
          />
          <h5>Majmu'</h5>
        </div>
      </div>
      <div class="col-4">
        <div class="text-center border bg-secondary bg-opacity-25" style="height: 200px">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhU-qxdBiMy4mHbK6mQj6Sf3JLNFxO5CtN_Xb5wKuWGwwQxY_bxSMUqEf1Tc7v3iYZVdanFZrK-GSbIIm2g7h06krtNBAf-7A_Q6FoDd7guk5iUhBakTUGHIBBZbc5AM4iwnjlkpkJ5BRDzfYQviDAgj5KJmpEND8XdRqW-oWdlKPvPwUR8WUH1Psmw=w480-h640"
            alt=""
          />
          <h5>Simtut</h5>
        </div>
      </div>
    </div>
  </div>
</template>
