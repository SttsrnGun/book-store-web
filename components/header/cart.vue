<template>
  <v-badge
    class="my-auto mx-2"
    :content="messages"
    :value="messages"
    color="green"
    overlap
  >
    <v-icon large @click="onClickGoSummary()"> mdi-cart-outline </v-icon>
  </v-badge>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      messages: 0,
    };
  },
  async created() {
    // let userMe = await this.$auth.$storage.getState("userMe");
    // this.messages = await userMe["data"]["cartsCount"];
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData",
  },
  methods: {
    onClickGoSummary() {
      this.$router.push("/summary");
    },
    async fetchData() {
      let userMe = await this.$auth.$storage.getState("userMe");
      this.messages = userMe["data"]["cartsCount"];
    },
  },
};
</script>