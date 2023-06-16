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
    <!-- begin:icon -->
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        fill="white"
        d="M13 21V11H21V21H13ZM3 13V3H11V13H3ZM9 11V5H5V11H9ZM3 21V15H11V21H3ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 3H21V9H13V3ZM15 5V7H19V5H15Z"
      ></path>
    </svg>
    <!-- end:icon -->
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
      <div>Masih belum selesai</div>
    </div>
  </div>
</template>
