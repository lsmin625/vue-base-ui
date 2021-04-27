<template>
  <div id="component">
    <b-card style="max-width: 30rem" class="mb-2">
    <template #header>
      <h4 class="mb-0">System Login</h4>
    </template>

    <b-card-body>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group label="Email:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Login</b-button>
        <b-button type="reset" variant="link" @click="onSubmit"
          >Sign up</b-button
        >
      </b-form>
    </b-card-body>
    </b-card>
  </div>
</template>

<script>
import store from '../store.js'

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    display(flag) {
      this.show = flag;
    },
    onSubmit(event) {
      event.preventDefault();
      store.commit('LOGIN', ({id: this.form.email, auth: {token: this.form.password, level: 1}}))
      alert(JSON.stringify(store.state));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
#component {
  margin: 60px;
}
</style>