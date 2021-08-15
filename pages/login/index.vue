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
        <v-btn
          color="success"
          class="mr-4"
          type="submit"
        >
          Login
        </v-btn>
        <v-btn
          color="primary"
          class="mr-4"
          @click="onClickRegister()"
        >
          Register
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        // console.log(this.$auth)
        // this.$auth.setUserToken('','')
        // this.$auth.logout('local')
        // console.log(this.$auth)
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    onClickRegister(){
      this.$router.push('/register');
    },
  },
};
</script>