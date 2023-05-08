<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>
<template>
  <div
    style="color: #fff; cursor: pointer"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#staticBackdrop"
    aria-controls="staticBackdrop"
  >
    <div
      class="toggle bg-white d-flex align-items-center justify-content-center"
      style="width: 22px; height: 22px"
    >
      <div class="toggle bg-dark" style="width: 10px; height: 10px"></div>
    </div>
  </div>

  <div
    class="offcanvas offcanvas-end"
    data-bs-backdrop="static"
    tabindex="-1"
    id="staticBackdrop"
    aria-labelledby="staticBackdropLabel"
    style="width: 300px"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Setting</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>I will not close if you click outside of me.</div>
    </div>
  </div>
</template>
