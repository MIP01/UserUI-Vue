<template>
  <div id="app">
    <MainNavbar />
    <router-view @user-selected="selectUser"></router-view>
  </div>
</template>

<script>
import MainNavbar from './components/MainNavbar.vue';

export default {
  components: {
    MainNavbar
  },
  methods: {
    selectUser(id) {
      this.$emit('user-selected', id);
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

.router-view {
  padding: 20px;
}
</style>
