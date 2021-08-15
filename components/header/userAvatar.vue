
<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-avatar size="35" class="my-auto mx-2" v-bind="attrs" v-on="on">
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        ></v-img>
      </v-avatar>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title @click="onClickAdmin()">
          My book
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title @click="onClickLogout()"> Logout </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  data() {
    return {
      name: "User",
      imagePath: "https://cdn.vuetifyjs.com/images/john.jpg",
    };
  },
  async created() {
    let userMe = await this.$auth.$storage.getState("userMe");
    this.name = userMe["data"].email;
    if (userMe["data"].imagePath) {
      this.messages = userMe["data"].imagePath;
    }
  },
  methods: {
    onClickLogout() {
      // this.$auth.setUserToken('','');
      this.$auth.logout("local");
      this.$router.push("/");
    },
    onClickAdmin() {
      this.$router.push("/admin");
    },
  },
};
</script>