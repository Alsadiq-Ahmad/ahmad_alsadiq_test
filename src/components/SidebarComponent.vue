<template>
  <div
    :class="[
      'd-flex flex-column flex-shrink-0 p-3 border-end border-secondary border-opacity-25 vh-100',
      {
        'text-white dark-bg': isNightMode,
        'text-dark nav-white-bg': !isNightMode,
        'border-end border-secondary border-opacity-25': !isRTL,
        'border-start border-secondary border-opacity-25': isRTL,
      },
    ]"
    :style="sidebarStyle"
  >
    <div class="d-flex justify-content-center">
      <img src="@/assets/images/gittax.png" alt="Logo" class="logo" width="60" />
    </div>
    <hr />
    <ul class="nav nav-pills flex-column mb-4">
      <li class="nav-item mt-1">
        <a
          href="#"
          :class="[
            'nav-link d-flex align-items-center',
            { 'poppins-medium': !isRTL, 'almarai-regular': isRTL },
            isActive('home') ? activeClass : defaultClass,
          ]"
          @click="setActiveLink('home')"
        >
          <i
            :class="[
              'bi bi-house-door-fill mx-2 rounded p-1 icon-size',
              isActive('home') ? activeIconClass : defaultIconClass,
            ]"
          ></i>
          {{ $t("Home") }}
        </a>
      </li>
      <li class="nav-item mt-1">
        <a
          href="#"
          :class="[
            'nav-link d-flex align-items-center',
            { 'poppins-medium': !isRTL, 'almarai-regular': isRTL },
            isActive('invoices') ? activeClass : defaultClass,
          ]"
          @click="setActiveLink('invoices')"
          data-bs-toggle="collapse"
          data-bs-target="#invoicesSubmenu"
          aria-expanded="false"
        >
          <i
            :class="[
              'bi bi-file-earmark-text-fill mx-2 rounded p-1 icon-size',
              isActive('invoices') ? activeIconClass : defaultIconClass,
            ]"
          ></i>
          {{ $t("Invoices And Reports") }}
          <i class="bi bi-caret-down-fill mx-1"></i>
        </a>
        <div class="collapse" id="invoicesSubmenu">
          <ul class="nav flex-column ms-0">
            <li class="nav-item">
              <a
                href="#"
                :class="[
                  'nav-link',
                  { 'poppins-medium': !isRTL, 'almarai-regular': isRTL },
                  isActive('item1') ? activeClass : defaultClass,
                ]"
                @click="setActiveLink('item1')"
              >
                {{ $t("Item 1") }}
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#"
                :class="[
                  'nav-link',
                  { 'poppins-medium': !isRTL, 'almarai-regular': isRTL },
                  isActive('item2') ? activeClass : defaultClass,
                ]"
                @click="setActiveLink('item2')"
              >
                {{ $t("Item 2") }}
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item mt-1">
        <a
          href="#"
          :class="[
            'nav-link d-flex align-items-center',
            { 'poppins-medium': !isRTL, 'almarai-regular': isRTL },
            isActive('services') ? activeClass : defaultClass,
          ]"
          @click="setActiveLink('services')"
        >
          <i
            :class="[
              'bi bi-gear-fill mx-2 rounded p-1 icon-size',
              isActive('services') ? activeIconClass : defaultIconClass,
            ]"
          ></i>
          {{ $t("Services Link") }}
        </a>
      </li>
      <li class="nav-item mt-1">
        <a
          href="#"
          :class="[
            'nav-link d-flex align-items-center',
            isActive('videos') ? activeClass : defaultClass,
            { 'poppins-medium': !isRTL, 'almarai-regular': isRTL },
          ]"
          @click="setActiveLink('videos')"
        >
          <i
            :class="[
              'bi bi-camera-video-fill mx-2 rounded p-1 icon-size',
              isActive('videos') ? activeIconClass : defaultIconClass,
            ]"
          ></i>
          {{ $t("Videos") }}
        </a>
      </li>
      <li class="nav-item mt-1">
        <a
          href="#"
          :class="[
            'nav-link d-flex align-items-center',
            { 'poppins-medium': !isRTL, 'almarai-regular': isRTL },
            isActive('affiliate') ? activeClass : defaultClass,
          ]"
          @click="setActiveLink('affiliate')"
        >
          <i
            :class="[
              'bi bi-person-circle mx-2 rounded p-1 icon-size',
              isActive('affiliate') ? activeIconClass : defaultIconClass,
            ]"
          ></i>
          {{ $t("Affiliate") }}
        </a>
      </li>
      <li class="nav-item mt-1">
        <a
          href="#"
          :class="[
            'nav-link d-flex align-items-center',
            { 'poppins-medium': !isRTL, 'almarai-regular': isRTL },
            isActive('contact') ? activeClass : defaultClass,
          ]"
          @click="setActiveLink('contact')"
        >
          <i
            :class="[
              'bi bi-envelope-fill mx-2 rounded p-1 icon-size',
              isActive('contact') ? activeIconClass : defaultIconClass,
            ]"
          ></i>
          {{ $t("Contact Us") }}
          <span
            class="badge text-bg-danger"
            :class="[
              { 'ms-4 poppins-medium': !isRTL, 'me-4 almarai-regular': isRTL },
            ]"
            >{{ $t("contact-number") }}</span
          >
        </a>
      </li>
      <li class="nav-item mt-1">
        <a
          href="#"
          :class="[
            'nav-link d-flex align-items-center',
            { 'poppins-medium': !isRTL, 'almarai-regular': isRTL },
            isActive('Permissions') ? activeClass : defaultClass,
          ]"
          @click="setActiveLink('Permissions')"
        >
          <i
            :class="[
              'bi bi-person-fill-lock mx-2 rounded p-1 icon-size',
              isActive('Permissions') ? activeIconClass : defaultIconClass,
            ]"
          ></i>
          {{ $t("Permissions") }}
        </a>
      </li>
    </ul>

    <ul class="nav nav-pills flex-column mb-4">
  <div class="form-check form-switch d-flex justify-content-center mb-3 me-4">
    <input
      class="form-check-input mx-0 switch-bg custom-switch border-0"
      type="checkbox"
      role="switch"
      id="languageSwitch"
      @change="toggleLanguage"
      :checked="isRTL"
    />
    <label
      class="form-check-label mx-2"
      :class="{ 'almarai-regular': isRTL }"
      for="languageSwitch"
    >
      {{ $t("اللغة العربية") }}
    </label>
  </div>
  <div class="form-check form-switch d-flex justify-content-center mb-3 me-4">
    <input
      class="form-check-input mx-0 switch-bg custom-switch border-0"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckChecked"
      @change="toggleNightMode"
      :checked="isNightMode"
    />
    <label
      class="form-check-label mx-2"
      :class="{ 'almarai-regular': isRTL }"
      for="flexSwitchCheckChecked"
    >
      {{ $t("Night Mode") }}
    </label>
  </div>
</ul>

    <div class="dropdown">
      <button
        class="btn yellow-bg text-dark-color w-100 poppins-semibold mt-3"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#testimonialModal"
      >
        {{ $t("DOWNLOAD APPS") }}
      </button>
    </div>

    <!-- Modal Component -->
    <ModalComponent :isNightMode="isNightMode" :isRTL="isRTL" />
  </div>
</template>
<script>
import ModalComponent from "@/components/ModalComponent.vue";

export default {
  name: "SidebarComponent",
  components: {
    ModalComponent,
  },
  data() {
    return {
      content: "",
      isRTL: localStorage.getItem("locale") === "ar",
      isDragOver: false,
      uploadedImage: null,
      uploadedFileName: null, // store the uploaded file name
      activeLink: "home", // store the active link
    };
  },
  props: {
    isNightMode: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    contentLength() {
      return this.content.length;
    },
    activeClass() {
      return this.isNightMode ? "yellow-color" : "yellow-color";
    },
    defaultClass() {
      return this.isNightMode ? "text-white" : "text-dark";
    },
    activeIconClass() {
      return this.isNightMode
        ? "yellow-bg text-dark-color"
        : "bg-light yellow-color";
    },
    defaultIconClass() {
      return this.isNightMode ? "text-white unhover-icon-bg" : "text-dark";
    },
    sidebarStyle() {
      return {
        minHeight: "130vh",
      };
    },
  },
  methods: {
    toggleLanguage() {
      this.$emit("toggle-language");
      this.isRTL = !this.isRTL;
    },
    toggleNightMode() {
      this.$emit("toggle-night-mode");
    },
    setActiveLink(link) {
      this.activeLink = link;
    },
    isActive(link) {
      return this.activeLink === link;
    },
  },
};
</script>
<style scoped></style>
