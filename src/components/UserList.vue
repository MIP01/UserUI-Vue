<template>
  <div class="user-list-container">
    <h2>User List</h2>
    <ul class="user-list">
      <li v-for="user in users" :key="user.id" @click="selectUser(user.id)" class="user-list-item">
        {{ user.name }}
      </li>
    </ul>
    <UserDetail v-if="selectedUserId" :userId="selectedUserId" />
  </div>
</template>

<script>
import axios from 'axios';
import UserDetail from './UserDetail.vue';
import '../style/userList.css';

export default {
  components: {
    UserDetail
  },
  data() {
    return {
      users: [],
      selectedUserId: null
    };
  },
  methods: {
    fetchUsers() {
      axios.get('http://localhost:5000/api/users')
        .then(response => {
          console.log('Users fetched:', response.data.data);
          this.users = response.data.data;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    selectUser(id) {
      this.selectedUserId = id;
    }
  },
  mounted() {
    this.fetchUsers();
  }
};
</script>
