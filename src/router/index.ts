import { createRouter, createWebHistory } from 'vue-router';
import UserFormView from '@/views/UserFormView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'UserForm',
      component: UserFormView,
    },
  ],
});

export default router;
