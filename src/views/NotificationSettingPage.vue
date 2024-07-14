<template>
  <div :class="['d-flex vh-100', { 'rtl': isRTL }]">
    <SidebarComponent :isNightMode="isNightMode" @toggle-night-mode="toggleNightMode" @toggle-language="toggleLanguage" />
    <div :class="['flex-grow-1 d-flex flex-column', { 'text-white dark-bg': isNightMode, 'text-dark white-bg': !isNightMode }]" :style="contentStyle">
      <NavigationComponent :isNightMode="isNightMode" />
      <!-- Notification Settings Content -->
      <NotificationSwitch 
        v-if="showNotificationSettings" 
        :isNightMode="isNightMode" 
        :isRTL="isRTL" 
        :showNotificationSettings="showNotificationSettings" 
        @toggle-notification-settings="toggleCardComponent" />
      <CardComponent v-else :isNightMode="isNightMode" @card-checkbox-clicked="showNotificationSettingsContent" />
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
import NotificationSwitch from "@/components/NotificationSwitch.vue";

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
    contentStyle() {
      return {
        minHeight: '130vh',
      };
    }
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
    toggleCardComponent() {
      this.showNotificationSettings = !this.showNotificationSettings;
    }
  },
  components: {
    CardComponent,
    NavigationComponent,
    SidebarComponent,
    NotificationSwitch,
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
/* Custom styles can go here */
</style>
