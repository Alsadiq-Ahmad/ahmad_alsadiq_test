<template>
  <div class="bg-container">
    <section id="login" class="container overlay my-5">
      <div class="d-flex justify-content-end">
        <a class="text-dark text-decoration-none" @click="toggleLanguage">
          {{ $t('اللغة العربية') }}
        </a>
      </div>
      <div class="row justify-content-between align-items-center">
        <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <img src="@/assets/gittax.png" class="img-fluid mb-2" alt="logo" width="110" />
          <h2 class="text-white">Gittax</h2>
        </div>
        <div class="col-12 col-md-4">
          <h3 class="fw-bold">{{ $t('Log In') }}</h3>
          <p class="text-muted">
            {{ $t('Dont have an account?') }}
            <router-link to="#" class="text-decoration-underline fw-bold text-dark">{{ $t('Sign up') }}</router-link>
          </p>
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="email" class="form-label">{{ $t('Email Address') }}</label>
              <input type="email" class="form-control" id="email" v-model="email" />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">{{ $t('password') }}</label>
              <div class="input-group">
                <input :type="showPassword ? 'text' : 'password'" class="form-control" id="password" v-model="password" />
                <button class="btn border" type="button" @click="togglePassword">
                  <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                </button>
              </div>
            </div>
            <div class="d-flex justify-content-end mb-4">
              <router-link to="/forgot-password" class="text-decoration-none text-dark">{{ $t('Forgot Password?') }}</router-link>
            </div>
            <router-link to="/setting">
              <button type="submit" class="btn btn-warning w-100 mb-2">{{ $t('Log In') }}</button>
            </router-link>
            <button type="button" class="btn btn-white border w-100 d-flex align-items-center justify-content-center">
              <img src="@/assets/google.png" width="20" class="me-2" alt="Google logo" />
              {{ $t('Log In With Google') }}
            </button>
            <div class="text-center mt-3">
              <router-link to="/" class="text-decoration-none text-dark">{{ $t('backToHome') }}</router-link>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    handleSubmit() {
      // Handle form submission
      console.log("Email:", this.email);
      console.log("Password:", this.password);
    },
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ar' : 'en';
    },
  },
};
</script>

<style scoped>
body,
html {
  height: 100%;
  margin: 0;
}

.bg-container {
  background: url("@/assets/background.png") no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
