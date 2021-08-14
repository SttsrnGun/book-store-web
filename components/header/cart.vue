<template>
  <v-badge class="my-auto mx-2" :content="messages" :value="messages" color="green" overlap>
    <v-icon large> mdi-cart-outline </v-icon>
  </v-badge>
</template>
<script>
export default {
  data() {
    return {
      messages: 0,
      show: false,
    };
  },
};
</script>