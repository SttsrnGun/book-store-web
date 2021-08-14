<template>
  <v-row justify="space-around">
    <v-spacer></v-spacer>
    <searchComponent />
    <cartComponent />
    <userAvatarComponent />
  </v-row>
</template>

<script>
import cartComponent from "@/components/header/cart";
import searchComponent from "@/components/header/search";
import userAvatarComponent from "@/components/header/userAvatar";
export default {
  components: {
    cartComponent,
    searchComponent,
    userAvatarComponent,
  },
};
</script>
