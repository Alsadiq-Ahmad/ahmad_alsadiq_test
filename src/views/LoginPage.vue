<template>
  <div class="bg-container">
    <div class="row no-gutters w-100">
      <div class="col-12 col-md-5 left-side login-bg d-flex flex-column justify-content-center align-items-center">
        <img src="@/assets/images/gittax.png" class="img-fluid mb-2" alt="logo" width="110" />
        <h2 class="text-white poppins-medium">Gittax</h2>
      </div>
      <div class="col-12 col-md-7 right-side white-bg black-color d-flex justify-content-center align-items-center">
        <section id="login" class="container overlay">
          <div class="d-flex justify-content-end">
            <a class="language-switcher text-dark text-decoration-none poppins-medium" @click="toggleLanguage">
              {{ isRTL ? $t('English') : $t('اللغة العربية') }}
            </a>
          </div>
          <div class="row justify-content-between align-items-center">
            <div class="col-12">
              <h3 class="poppins-semibold">{{ $t('Log In') }}</h3>
              <p class="poppins-regular text-muted">
                {{ $t('Dont have an account?') }}
                <router-link to="#" class="text-decoration-underline poppins-medium text-dark">{{ $t('Sign up') }}</router-link>
              </p>
              <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                  <label for="email" class="form-label poppins-medium">{{ $t('Email Address') }}</label>
                  <input type="email" class="form-control shadow-sm" id="email" v-model="email" />
                </div>
                <div class="mb-3 position-relative">
                  <label for="password" class="form-label poppins-medium">{{ $t('password') }}</label>
                  <input :type="showPassword ? 'text' : 'password'" class="form-control shadow-sm" id="password" v-model="password" />
                  <i :class="['password-toggle-icon', showPassword ? 'bi bi-eye-slash' : 'bi bi-eye', isRTL ? 'icon-left' : 'icon-right']" @click="togglePassword"></i>
                </div>
                <div class="d-flex justify-content-end mb-4">
                  <router-link to="/forgot-password" class="text-decoration-underline text-dark poppins-regular text-muted">{{ $t('Forgot Password?') }}</router-link>
                </div>
                <router-link to="/setting">
                  <button type="submit" class="btn btn-warning w-100 mb-2 poppins-medium shadow-sm">{{ $t('Log In') }}</button>
                </router-link>
                <button type="button" class="btn btn-white border w-100 d-flex align-items-center justify-content-center poppins-medium shadow-sm">
                  <img src="@/assets/icons/google.svg" width="20" class="mx-2" alt="Google logo" />
                  {{ $t('Log In With Google') }}
                </button>
                <div class="text-center mt-3">
                  <router-link to="/" class="text-decoration-none text-dark poppins-medium">{{ $t('backToHome') }}</router-link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
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
      isRTL: localStorage.getItem('locale') === 'ar',
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
      const newLocale = this.$i18n.locale === 'en' ? 'ar' : 'en';
      this.$i18n.locale = newLocale;
      this.isRTL = newLocale === 'ar';
      document.body.setAttribute('dir', this.isRTL ? 'rtl' : 'ltr');
      localStorage.setItem('locale', newLocale);
    },
  },
};
</script>
<style scoped>

</style>
