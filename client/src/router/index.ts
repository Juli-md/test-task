import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import PlayersTable from '../components/PlayersTable.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/home',
    component: Home,
  },
  {
    path: '/top',
    component: PlayersTable,
  },
  {
    path: '/full',
    component: PlayersTable,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
