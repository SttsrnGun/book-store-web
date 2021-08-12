<template>
  <v-sheet>
    <v-slide-group show-arrows class="d-flex justify-space-between mb-6">
      <v-slide-item v-for="(data, index) in bookList" :key="index">
        <bookCard
          :image="data.imagePath"
          :ratingScore="data.averageReviewScore"
          :ratingCount="data.reviewCount"
          :name="data.name"
          :price="data.price"
        />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
import bookCard from "../components/bookCard.vue";
export default {
  components: { bookCard },
  data() {
    return {
      bookList: {
        image: "",
        ratingScore: "",
        ratingCount: "",
        name: "",
        price: "",
      },
    };
  },
  async fetch() {
    const resonse = await this.$axios.get(`/api/books`);
    this.bookList = resonse.data["hydra:member"];
  },
};
</script>