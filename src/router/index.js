import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import NotificationSettingPage from '@/views/NotificationSettingPage.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/setting',
    name: 'Setting',
    component: NotificationSettingPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
