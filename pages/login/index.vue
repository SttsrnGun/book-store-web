<template>
  <v-container class="d-flex justify-space-around">
    <v-form @submit.prevent="userLogin">
      <div>
        <v-text-field
          v-model="login.email"
          label="Email"
          required
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          v-model="login.password"
          label="Password"
          type="password"
          required
        ></v-text-field>
      </div>
      <div class="d-flex justify-space-around">
        <v-btn color="success" class="mr-4" type="submit"> Login </v-btn>
        <v-btn color="primary" class="mr-4" @click="onClickRegister()">
          Register
        </v-btn>
      </div>
    </v-form>
    <snackbar :snackbar="isSnackbar" :text="String(snackbarText)" />
  </v-container>
</template>

<script>
import snackbar from "../../components/snackbar.vue";
export default {
  components: { snackbar },
  layout: "default",
  data() {
    return {
      isSnackbar: false,
      snackbarText: '',
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        this.isSnackbar = false;
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
      } catch (err) {
        this.isSnackbar = true;
        this.snackbarText = err;
      }
    },
    onClickRegister() {
      this.$router.push("/register");
    },
  },
};
</script>