<template>
  <v-app>
    <v-app-bar app flat dense>
      <header-layout />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import carousel from "@/components/carousel";
import headerLayout from "@/layouts/header.vue";
export default {
  middleware: ["auth"],
  components: {
    carousel,
    headerLayout,
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData",
  },
  async created() {
    let userMe = this.$auth.fetchUser();
    this.$auth.$storage.setState("userMe", userMe);
  },
  methods: {
    async fetchData() {
      let userMe = this.$auth.fetchUser();
      this.$auth.$storage.setState("userMe", userMe);
    },
  },
};
</script>
