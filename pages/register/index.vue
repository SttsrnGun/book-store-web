<template>
  <form @submit.prevent="submit">
    <div>
      <v-text-field
        v-model="register.email"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        v-model="register.password"
        type="password"
        label="Password"
        required
      ></v-text-field>
    </div>
    <div class="d-flex justify-space-around">
      <v-btn color="primary" class="mr-4" type="submit"> Register </v-btn>
      <v-btn color="success" class="mr-4" @click="onClickBack()"> Back </v-btn>
    </div>
    <snackbar :snackbar="isSnackbar" :text="String(snackbarText)" />
  </form>
</template>
<script>
import snackbar from "../../components/snackbar.vue";
export default {
  components: { snackbar },
  auth: false,
  data: () => ({
    isSnackbar: false,
    snackbarText: "",
    register: {
      email: "",
      password: "",
    },
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    async submit(values) {
      try {
        this.isSnackbar = false;
        this.isLoading = true;
        const payload = {
          email: this.register.email,
          password: this.register.password,
        };
        let resonse = await this.$axios.post(`/api/app_users/register`, payload);
        this.isLoading = false;

        this.isSnackbar = true;
        this.snackbarText = 'Success';
        this.onClickBack();
      } catch (err) {
        this.isSnackbar = true;
        this.snackbarText = err;
      }
    },
    async onClickBack() {
      await this.$router.push("/login");
    },
  },
};
</script>