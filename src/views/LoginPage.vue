<template>
  <div :class="['bg-container', { 'rtl': isRTL, 'bg-arabic': isRTL }]">
    <section id="login" class="container overlay my-5">
      <div class="d-flex justify-content-end">
        <a class="language-switcher text-dark text-decoration-none poppins-medium" @click="toggleLanguage">
          {{ isRTL ? $t('English') : $t('اللغة العربية') }}
        </a>
      </div>
      <div class="row justify-content-between align-items-center">
        <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <img src="@/assets/gittax.png" class="img-fluid mb-2" alt="logo" width="110" />
          <h2 class="text-white poppins-medium">Gittax</h2>
        </div>
        <div class="col-12 col-md-4 me-4" :class="{
          'me-4': !isRTL, 'ms-4': isRTL
        }">
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
              <i :class="['password-toggle-icon', showPassword ? 'bi bi-eye-slash' : 'bi bi-eye']" @click="togglePassword"></i>
            </div>
            <div class="d-flex justify-content-end mb-4">
              <router-link to="/forgot-password" class="text-decoration-underline text-dark poppins-regular text-muted">{{ $t('Forgot Password?') }}</router-link>
            </div>
            <router-link to="/setting">
              <button type="submit" class="btn btn-warning w-100 mb-2 poppins-medium shadow-sm">{{ $t('Log In') }}</button>
            </router-link>
            <button type="button" class="btn btn-white border w-100 d-flex align-items-center justify-content-center poppins-medium shadow-sm">
              <img src="@/assets/google.png" width="20" class="mx-2" alt="Google logo" />
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
body,
html {
  height: 100%;
  margin: 0;
}

.bg-container {
  background: url("@/assets/background11.png") no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-arabic {
  background: url("@/assets/background12.png") no-repeat center center;
  background-size: cover;
}

.rtl {
  direction: rtl;
}

.position-relative {
  position: relative;
}

.password-toggle-icon {
  position: absolute;
  top: 71%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
}

.rtl .password-toggle-icon {
  right: auto;
  left: 10px;
}

.language-switcher {
  cursor: pointer;
}
</style>
