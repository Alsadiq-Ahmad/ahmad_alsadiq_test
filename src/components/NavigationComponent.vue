<!--Navigation Component -->
<template>
  <nav
    :class="`navbar navbar-expand-lg ${
      isNightMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
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
          <i
            :class="`bi bi-bell-fill position-relative mx-3 ${
              isNightMode ? 'text-white' : 'text-dark'
            }`"
          >
            <span
              class="position-absolute top-0 start-100 translate-middle p-1 bg-warning border border-warning rounded-circle"
            ></span>
          </i>
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
            <img
              src="@/assets/person.png"
              alt="Profile"
              width="40"
              height="40"
              class="rounded-circle me-1"
            />
            <!-- <small class="text muted text-secondary opacity-50 d-flex align-items-start">Welcome</small> -->
            <span class="poppins-medium mx-2">Ahmad Alsadiq</span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end bg-dark border border-secondary"
            :class="`${
              isNightMode
                ? 'bg-dark border border-secondary'
                : 'bg-white border border-secondary'
            }`"
            aria-labelledby="navbarDropdown"
          >
            <router-link to="/" class="text-decoration-none">
              <li>
                <a
                  class="dropdown-item bg-dark text-light bg-dark text-light d-flex align-item-end poppins-medium"
                  :class="`${
                    isNightMode ? 'bg-dark text-light' : 'bg-white text-dark'
                  }`"
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
};
</script>

<style scoped>


</style>
