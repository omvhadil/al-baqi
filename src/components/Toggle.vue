<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// import { ref } from 'vue'

const useMode = () => {
  let element = document.querySelector('html')
  let mode = element.getAttribute('data-bs-theme')
  if (mode === 'dark') {
    element.setAttribute('data-bs-theme', 'light')
    localStorage.setItem('mode', 'light')
  } else {
    element.setAttribute('data-bs-theme', 'dark')
    localStorage.setItem('mode', 'dark')
  }
}
</script>
<template>
  <div
    style="font-size: 1.5rem; color: #fff; cursor: pointer"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasResponsive"
    aria-controls="offcanvasResponsive"
  >
    <i class="ri-align-right"></i>
  </div>

  <div
    class="offcanvas offcanvas-end"
    style="width: 60%"
    tabindex="10"
    id="offcanvasResponsive"
    aria-labelledby="offcanvasResponsiveLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Setting</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="form-check form-switch mb-3 border-1">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          :checked="localStorage?.getItem('mode') === 'light'"
          @click="useMode()"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">Mode</label>
      </div>
    </div>
  </div>
</template>
