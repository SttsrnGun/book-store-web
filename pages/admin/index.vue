<template>
  <div>
    <v-row>
      <v-col>
        <h2>My book</h2>
      </v-col>
    </v-row>
    <v-row>
      <allBook />
    </v-row>
  </div>
</template>
<script>
import allBook from "~/components/admin/myBook.vue";
export default {
  components: { allBook },
  layout: "main",
  async created() {
    // let userMe = await this.$auth.$storage.getState("userMe");
    // this.ownerId = String(userMe.data.id);
  },
};
</script>