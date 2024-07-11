import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/assets/fonts/fonts.css";
import i18n from './i18n'; // Import the i18n instance for translation
import globalMixin from './globalMixin';

import router from "./router";

createApp(App).mixin(globalMixin).use(i18n).use(router).mount('#app');
