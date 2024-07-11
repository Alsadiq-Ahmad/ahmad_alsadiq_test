export default {
    data() {
      return {
        isRTL: localStorage.getItem('locale') === 'ar',
      };
    },
    created() {
      document.body.setAttribute('dir', this.isRTL ? 'rtl' : 'ltr');
    },
    methods: {
      toggleLanguage() {
        const newLocale = this.$i18n.locale === 'en' ? 'ar' : 'en';
        this.$i18n.locale = newLocale;
        this.isRTL = newLocale === 'ar';
        document.body.setAttribute('dir', this.isRTL ? 'rtl' : 'ltr');
        localStorage.setItem('locale', newLocale);
        this.$emit('language-changed', newLocale);
      },
    },
  };
  