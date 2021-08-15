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
  </form>
</template>
<script>
export default {
  auth: false,
  data: () => ({
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
    submit(values) {
      this.isLoading = true;
      const payload = {
        email: this.register.email,
        password: this.register.password,
      };
      let resonse = this.$axios.post(`/api/users/register`, payload);
      this.isLoading = false;
    },
    onClickBack(){
      this.$router.push('/login');
    },
    
  },
};
</script>