<template>
  <section class="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h2 class="d-flex justify-content-center align-items-center gap-2 mb-4">
              <span class="display-1 fw-bold">4</span>
              <span class="display-1 fw-bold bsb-flip-h">0</span>
              <span class="display-1 fw-bold bsb-flip-h">4</span>
            </h2>
            <h3 class="h2 mb-2">{{ $t("Sorry about that.") }}</h3>
            <p class="mb-5">{{ $t("The page you are looking for was not found.") }}</p>
            <router-link class="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0" to="/">{{ $t("Back to Home") }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
