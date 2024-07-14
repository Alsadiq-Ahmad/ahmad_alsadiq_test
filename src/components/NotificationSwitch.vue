<template>
  <div class="container-fluid p-4 mt-3 flex-grow-1" v-if="showNotificationSettings">
    <div v-for="(setting, index) in notificationSettings" :key="setting.id">
      <div 
        class="form-check form-switch mb-0 d-flex align-items-center" 
        :class="{ 'text-white': isNightMode, 'text-dark': !isNightMode }">
        <input 
          class="form-check-input custom-switch switch-bg me-1 border-0" 
          type="checkbox" 
          :id="setting.id" 
          :checked="setting.checked" 
          @change="() => toggleNotificationSettings(index)" />
        <label 
          class="form-check-label me-5" 
          :class="{'poppins-regular':!isRTL,'almarai-regular':isRTL}" 
          :for="setting.id">
          {{ $t(setting.label) }}
        </label>
      </div>
      <p :class="['mt-1 mx-5', { 'text-white': isNightMode, 'text-dark': !isNightMode, 'poppins-regular': !isRTL, 'almarai-regular': isRTL }]">
        {{ $t(setting.description) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isNightMode: Boolean,
    isRTL: Boolean,
    showNotificationSettings: Boolean
  },
  data() {
    return {
      notificationSettings: [
        {
          id: "systemNotification",
          label: "System Notification",
          description: "All Notifications Sending By GitTax Team.",
          checked: true
        },
        {
          id: "billingCreated",
          label: "Billing Created",
          description: "All Bills Created By Source Or You Will Make A Successful Notification.",
          checked: true
        },
        {
          id: "backupMaker",
          label: "Backup Maker",
          description: "When Your Backup Sent To You your Mail Will Get A Notification.",
          checked: true
        },
        {
          id: "gotFreeMonth",
          label: "Got Free Month",
          description: "If Someone Use Your Affiliate Code You Will Get Free 1 Month Just One Time.",
          checked: true
        }
      ]
    };
  },
  methods: {
    toggleNotificationSettings(index) {
      if (index === 0) {
        this.$emit('toggle-notification-settings');
      }
    }
  }
};
</script>

<style scoped>
/* Custom switch styles */
.custom-switch {
  width: 45px;
  height: 25px;
}
.custom-switch::before {
  width: 26px;
  height: 26px;
}
</style>
