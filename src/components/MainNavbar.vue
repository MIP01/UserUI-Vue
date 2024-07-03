<template>
  <nav class="navbar">
    <router-link to="/add-user">Add User</router-link>
    <router-link to="/user-list">User List</router-link>
  </nav>
</template>

<script>
export default {
  name: 'MainNavbar'
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px;
}

.navbar a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>
