<template>
  <v-container fill-height>
    <v-row justify="space-around" class="mx-3">
      <v-toolbar-title @click="onClickHome()" class="my-auto mx-3 d-none d-sm-flex">Book</v-toolbar-title>
      <span class="my-auto mx-3 d-none d-sm-flex" @click="onClickHome()">
        <h4>Home</h4>
      </span>
      <v-spacer class="d-none d-sm-flex"></v-spacer>
      <searchComponent />
      <cartComponent />
      <userAvatarComponent />
    </v-row>
  </v-container>
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
  methods:{
    onClickHome(){
      this.$router.push('/');
    }
  }
};
</script>
