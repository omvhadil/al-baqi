<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const warning = () => {
  alert('Gi tak mareh')
}
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
      <div class="col-4 text-center">
        <div
          @click="router.push('/madad')"
          class="text-center border bg-secondary bg-opacity-25"
          style="height: 170px"
        >
          <img
            src="https://archive.org/services/img/habib-umar-al-khulasoh-2019/full/pct:200/0/default.jpg"
            alt=""
          />
        </div>
        <h5 class="mt-1">Khulashoh</h5>
      </div>
      <div class="col-4 text-center">
        <div
          @click="warning()"
          class="text-center border bg-secondary bg-opacity-25"
          style="height: 170px"
        >
          <img
            src="https://www.sinarbarualgensindo.com/wp-content/uploads/2020/06/Majmu-luks.jpg"
            alt=""
          />
        </div>
        <h5 class="mt-1">Majmu'</h5>
      </div>
      <div class="col-4 text-center">
        <div
          @click="warning()"
          class="text-center border bg-secondary bg-opacity-25"
          style="height: 170px"
        >
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhU-qxdBiMy4mHbK6mQj6Sf3JLNFxO5CtN_Xb5wKuWGwwQxY_bxSMUqEf1Tc7v3iYZVdanFZrK-GSbIIm2g7h06krtNBAf-7A_Q6FoDd7guk5iUhBakTUGHIBBZbc5AM4iwnjlkpkJ5BRDzfYQviDAgj5KJmpEND8XdRqW-oWdlKPvPwUR8WUH1Psmw=w480-h640"
            alt=""
          />
        </div>
        <h5 class="mt-1">Simtut</h5>
      </div>
      <div class="col-4 text-center">
        <div
          @click="warning()"
          class="text-center border bg-secondary bg-opacity-25"
          style="height: 170px"
        >
          <img
            src="https://3.bp.blogspot.com/-FNVBvyNGxCk/V1dbhEH2F2I/AAAAAAAABs8/Kv6bNAsleXkUbggcQBA8oQ6lFrpHaxUGgCLcB/s1600/download-pdf-keutamaan-puasa-karya-ibnu-hajar-haitami.jpg"
            alt=""
          />
        </div>
        <h5 class="mt-1">Romadhon</h5>
      </div>
    </div>
  </div>
</template>
