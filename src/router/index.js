import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/pages/Home.vue';
import NotFound from '../views/pages/NotFound.vue';

const routes = [
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/pages/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/pages/Login.vue'),
  },
  {
    path: '/user/:id', // <-- notice the colon
    name: 'User',
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/pages/User.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
