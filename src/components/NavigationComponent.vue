<template>
  <nav
    :class="`navbar navbar-expand-lg ${
      isNightMode ? 'navbar-dark dark-bg' : 'navbar-light nav-white-bg'
    }`"
   
  >
    <div class="container-fluid">
      <span
        class="navbar-brand poppins-medium"
        :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }"
      >
        {{ $t("Notification Setting") }}
      </span>
      <div class="d-flex align-items-center ms-0">
        <a
          href="#"
          :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }"
          class="nav-link"
        >
          <img src="@/assets/icons/bell.svg" class="mx-2" alt="">

        </a>
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center text-decoration-none dropdown-toggle"
            :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="@/assets/icons/user.svg" alt="">

            <span class="poppins-medium mx-2">Daniel Estasmos</span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            :class="dropdownMenuClass"
            aria-labelledby="navbarDropdown"
          >
            <router-link to="/" class="text-decoration-none">
              <li>
                <a
                  class="dropdown-item d-flex align-item-end poppins-medium"
                  :class="dropdownItemClass"
                  href="#"
                >
                  {{ $t("Logout") }}
                </a>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavigationComponent",
  props: {
    isNightMode: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dropdownMenuClass() {
      return this.isNightMode ? 'dark-bg border border-secondary' : 'bg-white border border-secondary';
    },
    dropdownItemClass() {
      return this.isNightMode ? 'dark-bg text-light' : 'bg-white text-dark';
    }
  }
};
</script>
<style scoped>

</style>