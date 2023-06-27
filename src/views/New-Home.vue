<script setup></script>
<template>
  <header class="header px-3">
    <div class="nav d-flex align-items-center justify-content-end" style="height: 3.5rem">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          d="M6.75 2.5C9.09721 2.5 11 4.40279 11 6.75V11H6.75C4.40279 11 2.5 9.09721 2.5 6.75C2.5 4.40279 4.40279 2.5 6.75 2.5ZM9 9V6.75C9 5.50736 7.99264 4.5 6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75C4.5 7.99264 5.50736 9 6.75 9H9ZM6.75 13H11V17.25C11 19.5972 9.09721 21.5 6.75 21.5C4.40279 21.5 2.5 19.5972 2.5 17.25C2.5 14.9028 4.40279 13 6.75 13ZM6.75 15C5.50736 15 4.5 16.0074 4.5 17.25C4.5 18.4926 5.50736 19.5 6.75 19.5C7.99264 19.5 9 18.4926 9 17.25V15H6.75ZM17.25 2.5C19.5972 2.5 21.5 4.40279 21.5 6.75C21.5 9.09721 19.5972 11 17.25 11H13V6.75C13 4.40279 14.9028 2.5 17.25 2.5ZM17.25 9C18.4926 9 19.5 7.99264 19.5 6.75C19.5 5.50736 18.4926 4.5 17.25 4.5C16.0074 4.5 15 5.50736 15 6.75V9H17.25ZM13 13H17.25C19.5972 13 21.5 14.9028 21.5 17.25C21.5 19.5972 19.5972 21.5 17.25 21.5C14.9028 21.5 13 19.5972 13 17.25V13ZM15 15V17.25C15 18.4926 16.0074 19.5 17.25 19.5C18.4926 19.5 19.5 18.4926 19.5 17.25C19.5 16.0074 18.4926 15 17.25 15H15Z"
        ></path>
      </svg>
    </div>
  </header>
  <section class="section">
    <div class="row mt-4">
      <div class="col-9">
        <div class="text-center mt-4">
          <h1 class="nav_logo font-aref text-decoration-none text-success" style="font-size: 5rem">
            الْبَاقِيْ
          </h1>
          <p class="text-success" style="font-size: 2rem">Al-Baqi'</p>

          <div class="mt-5">
            <span class="text-secondary">&#169; Alabim 2023. All right reserved</span>
          </div>
        </div>
      </div>
      <!-- menu -->
      <div class="col-3">
        <div class="menu rounded-start-5 bg-success p-4 d-grid justify-content-center gap-4">
          <div @click="router.push('madad')" class="menu-item text-center">
            <div>
              <div
                class="menu-icon bg-success-subtle p-3 rounded-circle d-grid justify-content-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#5C8984"
                    d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Khulasoh</span>
          </div>
          <div @click="router.push('majmu')" class="menu-item text-center">
            <div>
              <div
                class="menu-icon bg-success-subtle p-3 rounded-circle d-grid justify-content-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#5C8984"
                    d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Majmu'</span>
          </div>
          <div @click="router.push('/majmu/tahlil-kubur')" class="menu-item text-center">
            <div>
              <div
                class="menu-icon bg-success-subtle p-3 rounded-circle d-grid justify-content-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#5C8984"
                    d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="text-white">Tahlil</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section px-3 mt-4">
    <h4 class="m-0">Tawassul Maqbaroh</h4>
    <hr class="m-0" />
    <div class="row mt-2 gap-2">
      <div class="col-12">
        <div
          class="catatan border-3 border-start border-success bg-success-subtle rounded-end p-3 cursor"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Patokan - Kraksaan - Probolinggo
        </div>
      </div>
      <div class="col-12">
        <div
          class="catatan border-3 border-start border-success bg-success-subtle rounded-end p-3 cursor"
        >
          Patokan - Kraksaan - Probolinggo
        </div>
      </div>
      <div class="col-12">
        <div
          class="catatan border-3 border-start border-success bg-success-subtle rounded-end p-3 cursor"
        >
          Patokan - Kraksaan - Probolinggo
        </div>
      </div>
    </div>
  </section>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <ul>
            <li>Habib</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  width: 100%;
}
.menu-icon {
  width: 4rem;
  height: 4rem;
}
</style>
