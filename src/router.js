import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './views/coaches/CoachDetail.vue';
import CoachesView from './views/coaches/CoachesView.vue';
import CoachRegistration from './views/coaches/CoachRegistration.vue';
import ContactCoach from './views/requests/ContactCoach.vue';
import RequestsReceived from './views/requests/RequestsReceived.vue';
import NotFound from './views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesView, name: 'coaches' },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      name: 'coach-detail',
      children: [{ path: 'contact', component: ContactCoach, name: 'contact' }],
    },
    { path: '/register', component: CoachRegistration, name: 'register' },
    { path: '/requests', component: RequestsReceived, name: 'requests' },
    { path: '/:notFound(.*)', component: NotFound, name: 'not-found' },
  ],
});

export default router;
