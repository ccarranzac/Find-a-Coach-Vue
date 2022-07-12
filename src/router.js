import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: null, name: 'coaches' },
    {
      path: '/coaches/:id',
      component: null,
      name: 'coach-detail',
      children: [{ path: 'contact', component: null, name: 'contact' }],
    },
    { path: '/register', component: null, name: 'register' },
    { path: '/requests', component: null, name: 'requests' },
    { path: '/:notFound(.*)', component: null, name: 'not-found' },
  ],
});

export default router;
