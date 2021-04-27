<template>
  <div>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <nav class="mb-1">
        <b-nav vertical>
          <b-nav-item active @click="hide">Active</b-nav-item>
          <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
          <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
        </b-nav>
      </nav>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data: {
    form: {
      email: "",
      password: "",
    },
    show: true,
  },
  methods: {
    hide(event) {
      event.preventDefault();
    }
  }
};
</script>