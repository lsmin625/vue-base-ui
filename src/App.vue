<template>
  <div id="app">
    <Navbar />
    <Login />
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Login,
    Navbar
  }
};
</script>
<!--
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>
-->