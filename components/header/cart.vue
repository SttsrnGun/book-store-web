<template>
  <v-badge :content="messages" :value="messages" color="green" overlap>
    <v-icon large> mdi-vuetify </v-icon>
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