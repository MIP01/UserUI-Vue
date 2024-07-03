import { createRouter, createWebHistory } from 'vue-router';
import AddUserForm from '../components/AddUserForm.vue';
import UserList from '../components/UserList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/user-list'
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component: AddUserForm
  },
  {
    path: '/user-list',
    name: 'UserList',
    component: UserList
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
