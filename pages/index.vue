<template>
  <div>
    <v-row>
      <v-col>
        <carousel />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Best sellers</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <slideItem bookTag="best_sellers" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Recommendation</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <slideItem bookTag="recomended" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>All book</h2>
      </v-col>
    </v-row>
    <v-row>
      <allBook />
    </v-row>
  </div>
</template>
<script>
import carousel from "../components/carousel.vue";
import slideItem from "../components/slideItem.vue";
import allBook from "../components/allBook.vue";
export default {
  components: { carousel, slideItem, allBook },
  layout: "main",
  data() {
    return {
      tab: null,
      bookTag: {},
    };
  },
  async created() {
    //get bookTag
    const resonse = await this.$axios.get("/api/enums");
    // console.log(resonse.data);
    this.bookTag = resonse.data;
  },

  //
};
</script>