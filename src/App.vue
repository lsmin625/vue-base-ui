<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#" v-b-toggle.sidebar-1>
          <b-icon icon="shield-fill-check" class="mr-2"></b-icon>IdPS</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-if="hasLogged">
            <b-nav-item id="menu-home"><router-link to="/home">Home</router-link></b-nav-item>
            <b-nav-item id="menu-account"><router-link to="/account">Account</router-link></b-nav-item>
            <b-nav-item id="menu-device"><router-link to="/device">Device</router-link></b-nav-item>
            <b-nav-item id="menu-profile"><router-link to="/profile">Profile</router-link></b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"><router-link to="/login">Login</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store.js'

export default {
  name: "App",
  data() {
    return {
      logged: false,
    }
  },
  methods: {
    enableMenu(event) {
      event.preventDefault();
//      this.menu_home.style.enableMenu = false;
    }
  },
  computed: {
    hasLogged: function () {
      return store.state.id ? true : false
    }
  }
};
</script>
