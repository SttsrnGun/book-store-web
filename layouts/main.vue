<template>
  <v-app>
    <v-app-bar app flat height="45">
      <header-layout />
      <!-- <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container> -->
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
  layout: "main",
  components: {
    carousel,
    headerLayout,
  },
};
</script>
