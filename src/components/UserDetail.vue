<template>
  <div v-if="user" class="user-detail-container">
    <h2>User Detail</h2>
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Address:</strong> {{ user.address }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import '../style/userDetail.css';

export default {
  props: ['userId'],
  data() {
    return {
      user: null
    };
  },
  watch: {
    userId: {
      immediate: true,
      handler(newId) {
        if (newId) {
          this.fetchUser(newId);
        } else {
          this.user = null;
        }
      }
    }
  },
  methods: {
    fetchUser(id) {
      axios.get(`http://localhost:5000/api/users/${id}`)
        .then(response => {
          console.log('User fetched:', response.data.data);
          this.user = response.data.data;
        })
        .catch(error => {
          console.error('Error fetching user:', error);
        });
    }
  }
};
</script>
