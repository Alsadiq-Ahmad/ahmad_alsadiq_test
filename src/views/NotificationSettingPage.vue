<template>
  <div :class="['d-flex', { 'bg-dark': isNightMode, 'bg-light': !isNightMode, 'rtl': isRTL }]">
    <SidebarComponent :isNightMode="isNightMode" @toggle-night-mode="toggleNightMode" @toggle-language="toggleLanguage" />
    <div :class="['flex-grow-1', { 'bg-dark text-white': isNightMode, 'bg-light text-dark': !isNightMode }]">
      <NavigationComponent :isNightMode="isNightMode" />
      <!-- Notification Settings Content -->
      <div class="container-fluid p-4 mt-3" v-if="showNotificationSettings">
        <div class="form-check form-switch mb-0 d-flex align-items-center" :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }">
          <input class="form-check-input custom-switch me-1 border-0" type="checkbox" id="systemNotification" @change="toggleNotificationSettings" checked />
          <label class="form-check-label  me-5" :class="{'poppins-regular':!isRTL,'almarai-regular':isRTL}" :for="systemNotification">{{ $t("System Notification") }}</label>
        </div>
        <p :class="[' mt-1 mx-5', { 'text-white': isNightMode, 'text-dark': !isNightMode ,'poppins-regular':!isRTL,'almarai-regular':isRTL}]">{{ $t("All Notifications Sending By GitTax Team.") }}</p>

        <div class="form-check form-switch mb-0 d-flex align-items-center" :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }">
          <input class="form-check-input custom-switch me-1 border-0" type="checkbox" id="billingCreated" checked />
          <label class="form-check-label me-5" :class="{'poppins-regular':!isRTL,'almarai-regular':isRTL}" :for="billingCreated">{{ $t("Billing Created") }}</label>
        </div>
        <p :class="[' mt-1 mx-5', { 'text-white': isNightMode, 'text-dark': !isNightMode ,'poppins-regular':!isRTL,'almarai-regular':isRTL }]">{{ $t("All Bills Created By Source Or You Will Make A Successful Notification.") }}</p>

        <div class="form-check form-switch mb-0 d-flex align-items-center" :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }">
          <input class="form-check-input custom-switch me-1 border-0" type="checkbox" id="backupMaker" checked />
          <label class="form-check-label me-5" :class="{'poppins-regular':!isRTL,'almarai-regular':isRTL}" :for="backupMaker">{{ $t("Backup Maker") }}</label>
        </div>
        <p :class="[' mt-1 mx-5', { 'text-white': isNightMode, 'text-dark': !isNightMode ,'poppins-regular':!isRTL,'almarai-regular':isRTL}]">{{ $t("When Your Backup Sent To You your Mail Will Get A Notification.") }}</p>

        <div class="form-check form-switch mb-0 d-flex align-items-center" :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }">
          <input class="form-check-input custom-switch me-1 border-0" type="checkbox" id="gotFreeMonth" checked />
          <label class="form-check-label me-5" :class="{'poppins-regular':!isRTL,'almarai-regular':isRTL}" :for="gotFreeMonth">{{ $t("Got Free Month") }}</label>
        </div>
        <p :class="[' mt-1 mx-5', { 'text-white': isNightMode, 'text-dark': !isNightMode ,'poppins-regular':!isRTL,'almarai-regular':isRTL }]">{{ $t("If Someone Use Your Affiliate Code You Will Get Free 1 Month Just One Time.") }}</p>
      </div>
      <CardComponent v-else :isNightMode="isNightMode" @card-checkbox-clicked="showNotificationSettingsContent" />
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  name: "NotificationSettingPage",
  data() {
    return {
      content: "",
      showNotificationSettings: true,
      isNightMode: true,
      isRTL: localStorage.getItem('locale') === 'ar',
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
      const newLocale = this.$i18n.locale === 'en' ? 'ar' : 'en';
      this.$i18n.locale = newLocale;
      this.isRTL = newLocale === 'ar';
      document.body.setAttribute('dir', this.isRTL ? 'rtl' : 'ltr');
      localStorage.setItem('locale', newLocale);
    },
    toggleNightMode() {
      this.isNightMode = !this.isNightMode;
    },
    showNotificationSettingsContent() {
      this.showNotificationSettings = true;
    },
    showCardComponent() {
      this.showNotificationSettings = false;
    },
  },
  components: {
    CardComponent,
    NavigationComponent,
    SidebarComponent,
  },
  created() {
    // Set the initial locale based on the stored value
    const storedLocale = localStorage.getItem('locale');
    if (storedLocale) {
      this.$i18n.locale = storedLocale;
      this.isRTL = storedLocale === 'ar';
      document.body.setAttribute('dir', this.isRTL ? 'rtl' : 'ltr');
    }
  },
};
</script>

<style scoped>
.rtl {
  direction: rtl;
}

/* Custom switch styles */
.custom-switch {
  width: 45px;
  height: 25px;
}

.custom-switch:checked {
  --switch-color:#6c5ecf;
  background-color: var(--switch-color);
}

.custom-switch::before {
  width: 26px;
  height: 26px;
}
</style>
