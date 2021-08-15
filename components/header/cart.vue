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
export default {
  data() {
    return {
      messages: 0,
    };
  },
  async created() {
    let userMe = await this.$auth.$storage.getState("userMe");
    this.messages = await userMe["data"]["cartsCount"];
  },
  methods: {
    onClickGoSummary() {
      this.$router.push("/summary");
    },
  },
};
</script>