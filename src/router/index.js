import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import NotificationSettingPage from '@/views/NotificationSettingPage.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/setting', name: 'Setting', component: NotificationSettingPage },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
