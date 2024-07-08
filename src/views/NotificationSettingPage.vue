<template>
  <div :class="`d-flex ${isNightMode ? 'bg-dark' : 'bg-light'}`">
    <div
      :class="`d-flex flex-column flex-shrink-0 p-3 ${
        isNightMode ? 'text-white bg-dark' : 'text-dark bg-light'
      }`"
      style="width: 280px; height: 110vh"
    >
      <div class="d-flex justify-content-center align-items-center">
        <img src="@/assets/gittax.png" alt="Logo" class="logo" width="60" />
      </div>
      <hr />
      <ul class="nav nav-pills flex-column mb-5">
        <li class="nav-item mt-1">
          <a href="#" class="nav-link d-flex align-items-center text-warning">
            <i
              :class="`bi bi-house-door-fill me-2 rounded p-1 ${
                isNightMode ? 'bg-warning text-dark' : 'bg-light text-warning'
              }`"
            ></i>
            {{ $t("Home") }}
          </a>
        </li>
        <li class="nav-item mt-1">
          <a
            href="#"
            :class="`nav-link d-flex align-items-center ${
              isNightMode ? 'text-white' : 'text-dark'
            }`"
            data-bs-toggle="collapse"
            data-bs-target="#invoicesSubmenu"
            aria-expanded="false"
          >
            <span>
              <i class="bi bi-file-earmark-text me-2"></i>
              {{ $t("Invoices And Reports") }}
            </span>
            <i class="bi bi-caret-down-fill ms-auto"></i>
          </a>
          <div class="collapse" id="invoicesSubmenu">
            <ul class="nav flex-column ms-4">
              <li class="nav-item">
                <a
                  :class="`nav-link ${
                    isNightMode ? 'text-white' : 'text-dark'
                  }`"
                >
                  {{ $t("Item 1") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  :class="`nav-link ${
                    isNightMode ? 'text-white' : 'text-dark'
                  }`"
                >
                  {{ $t("Item 2") }}
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item mt-1">
          <a
            :class="`nav-link d-flex align-items-center ${
              isNightMode ? 'text-white' : 'text-dark'
            }`"
          >
            <i class="bi bi-gear me-2"></i>
            {{ $t("Services Link") }}
          </a>
        </li>
        <li class="nav-item mt-1">
          <a
            :class="`nav-link d-flex align-items-center ${
              isNightMode ? 'text-white' : 'text-dark'
            }`"
          >
            <i class="bi bi-camera-video me-2"></i>
            {{ $t("Videos") }}
          </a>
        </li>
        <li class="nav-item mt-1">
          <a
            :class="`nav-link d-flex align-items-center ${
              isNightMode ? 'text-white' : 'text-dark'
            }`"
          >
            <i class="bi bi-person-circle me-2"></i>
            {{ $t("Affiliate") }}
          </a>
        </li>
        <li class="nav-item mt-1">
          <a
            :class="`nav-link d-flex align-items-center ${
              isNightMode ? 'text-white' : 'text-dark'
            }`"
          >
            <i class="bi bi-envelope me-2"></i>
            {{ $t("Contact Us") }}
            <span class="badge text-bg-danger ms-2">+10</span>
          </a>
        </li>
      </ul>

      <ul class="nav nav-pills flex-column mb-5">
        <div class="form-check form-switch d-flex justify-content-center mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="languageSwitch"
            @change="toggleLanguage"
          />
          <label class="form-check-label mx-2" for="languageSwitch"
            >اللغة العربية</label
          >
        </div>
        <div class="form-check form-switch d-flex justify-content-center">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked
            @change="toggleNightMode"
          />
          <label class="form-check-label mx-2" for="flexSwitchCheckChecked">{{
            $t("Night Mode")
          }}</label>
        </div>
      </ul>
      <div class="dropdown">
        <button
          class="btn btn-warning w-100 fw-bold"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#testimonialModal"
        >
          {{ $t("DOWNLOAD APPS") }}
        </button>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="testimonialModal"
        tabindex="-1"
        aria-labelledby="testimonialModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div
            :class="`modal-content ${
              isNightMode ? 'bg-dark text-white' : 'bg-white text-dark'
            }`"
          >
            <div class="modal-header border-0">
              <h5 class="modal-title" id="testimonialModalLabel">
                {{ $t("Add New Testimonial") }}
              </h5>
              <button
                type="button"
                class="btn-close"
                :class="isNightMode ? 'btn-close-white' : ''"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="userPhoto" class="form-label">{{
                    $t("User Photo")
                  }}</label>
                  <div
                    :class="`border rounded p-3 text-center ${
                      isNightMode ? 'border-secondary' : ''
                    }`"
                  >
                    <i class="bi bi-file-earmark-image fs-1"></i>
                    <p :class="isNightMode ? 'text-light' : ''">
                      {{ $t("Drop Your Image Here Or Browse") }}
                    </p>
                    <small :class="isNightMode ? 'text-light' : ''">{{
                      $t("drag-drop-image-rules")
                    }}</small>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="userName" class="form-label">{{
                    $t("User Name")
                  }}</label>
                  <input
                    type="text"
                    :class="`form-control ${
                      isNightMode ? 'bg-dark text-white border-secondary' : ''
                    }`"
                    id="userName"
                  />
                </div>
                <div class="mb-3">
                  <label for="companyName" class="form-label">{{
                    $t("Company Name")
                  }}</label>
                  <input
                    type="text"
                    :class="`form-control ${
                      isNightMode ? 'bg-dark text-white border-secondary' : ''
                    }`"
                    id="companyName"
                  />
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">{{
                    $t("Content")
                  }}</label>
                  <textarea
                    :class="`form-control ${
                      isNightMode ? 'bg-dark text-white border-secondary' : ''
                    }`"
                    id="content"
                    rows="3"
                    maxlength="100"
                    v-model="content"
                  ></textarea>
                  <small
                    :class="`form-text d-flex justify-content-end ${
                      isNightMode ? 'text-light' : ''
                    }`"
                  >
                    <span class="text-warning">{{ contentLength }}</span
                    >/100
                  </small>
                </div>
                <div class="d-flex justify-content-end">
                  <button type="submit" class="btn btn-warning">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="`flex-grow-1 ${
        isNightMode ? 'bg-dark text-white' : 'bg-light text-dark'
      }`"
    >
      <nav
        :class="`navbar navbar-expand-lg ${
          isNightMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
        }`"
      >
        <div class="container-fluid">
          <a
            class="navbar-brand"
            :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }"
            href="#"
            >{{ $t("Notification Setting") }}</a
          >
          <div class="d-flex align-items-center ms-auto">
            <a
              href="#"
              :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }"
              class="nav-link"
            >
              <i
                :class="`bi bi-bell-fill position-relative me-3 ${
                  isNightMode ? 'text-white' : 'text-dark'
                }`"
              >
                <span
                  class="position-absolute top-0 start-100 translate-middle p-1 bg-warning border border-light rounded-circle"
                ></span>
              </i>
            </a>
            <div class="dropdown">
              <a
                href="#"
                class="d-flex align-items-center text-decoration-none dropdown-toggle"
                :class="{
                  'text-white': isNightMode,
                  'text-dark': !isNightMode,
                }"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="../assets/person.png"
                  alt="Profile"
                  width="40"
                  height="40"
                  class="rounded-circle me-2"
                />
                <span>Ahmad Alsadiq</span>
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
                      class="dropdown-item bg-dark text-light"
                      :class="`${
                        isNightMode
                          ? 'bg-dark text-light'
                          : 'bg-white text-dark'
                      }`"
                      href="#"
                      >{{ $t("Logout") }}</a
                    >
                  </li>
                </router-link>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <!-- Notification Settings Content -->
      <div class="container-fluid p-4 mt-3" v-if="showNotificationSettings">
        <div
          class="form-check form-switch mb-3"
          :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }"
        >
          <input
            class="form-check-input"
            type="checkbox"
            id="systemNotification"
            checked
            @change="toggleNotificationSettings"
          />
          <label class="form-check-label" for="systemNotification">{{
            $t("System Notification")
          }}</label>
          <p :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }">
            {{ $t("All Notifications Sending By GitTax Team.") }}
          </p>
        </div>
        <div
          class="form-check form-switch mb-3"
          :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }"
        >
          <input
            class="form-check-input"
            type="checkbox"
            id="billingCreated"
            checked
          />
          <label class="form-check-label" for="billingCreated">{{
            $t("Billing Created")
          }}</label>
          <p :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }">
            {{
              $t(
                "All Bills Created By Source Or You Will Make A Successful Notification."
              )
            }}
          </p>
        </div>
        <div
          class="form-check form-switch mb-3"
          :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }"
        >
          <input
            class="form-check-input"
            type="checkbox"
            id="backupMaker"
            checked
          />
          <label class="form-check-label" for="backupMaker">{{
            $t("Backup Maker")
          }}</label>
          <p :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }">
            {{
              $t(
                "When Your Backup Sent To You your Mail Will Get A Notification."
              )
            }}
          </p>
        </div>
        <div
          class="form-check form-switch mb-3"
          :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }"
        >
          <input
            class="form-check-input"
            type="checkbox"
            id="gotFreeMonth"
            checked
          />
          <label class="form-check-label" for="gotFreeMonth">{{
            $t("Got Free Month")
          }}</label>
          <p :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }">
            {{
              $t(
                "If Someone Use Your Affiliate Code You Will Get Free 1 Month Just One Time."
              )
            }}
          </p>
        </div>
      </div>
      <CardComponent v-else :isNightMode="isNightMode" />
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "NotificationSettingPage",
  data() {
    return {
      content: "",
      showNotificationSettings: true,
      isNightMode: true,
    };
  },
  computed: {
    contentLength() {
      return this.content.length;
    },
  },
  methods: {
    toggleNotificationSettings() {
      this.showNotificationSettings = !this.showNotificationSettings;
    },
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === "en" ? "ar" : "en";
    },
    toggleNightMode() {
      this.isNightMode = !this.isNightMode;
    },
  },
  components: {
    CardComponent,
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
