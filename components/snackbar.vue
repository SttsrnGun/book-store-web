<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="snackbar" top timeout="2000">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  props: {
    snackbar: {
      type: Boolean,
    },
    text: {
      type: String,
    },
  },
  data: () => ({
    // text: `Hello, I'm a snackbar`,
  }),
};
</script>