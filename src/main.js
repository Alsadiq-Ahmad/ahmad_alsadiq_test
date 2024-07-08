import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import i18n from './i18n'; // Import the i18n instance for translation


import router from "./router";

createApp(App).use(i18n).use(router).use(i18n).mount('#app');
