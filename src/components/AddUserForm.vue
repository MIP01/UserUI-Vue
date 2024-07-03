<template>
  <div class="form-container">
    <h2>Add User</h2>
    <form @submit.prevent="addUser">
      <div class="form-group">
        <label>Name:</label>
        <input type="text" v-model="name" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" v-model="email" />
      </div>
      <div class="form-group">
        <label>Address:</label>
        <input type="text" v-model="address" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" v-model="password" />
      </div>
      <button type="submit" class="submit-button">Add User</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import '../style/addUserForm.css';

export default {
  data() {
    return {
      name: '',
      email: '',
      address: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    addUser() {
      const newUser = {
        name: this.name,
        email: this.email,
        address: this.address,
        password: this.password
      };
      axios.post('http://localhost:5000/api/users', newUser)
        .then(response => {
          console.log('User added successfully:', response.data);
          this.$emit('user-added');
          this.name = '';
          this.email = '';
          this.address = '';
          this.password = '';
          this.errorMessage = '';
        })
        .catch(error => {
          console.error('Error adding user:', error);
          this.errorMessage = 'Failed to add user. Please try again.';
        });
    }
  }
};
</script>
