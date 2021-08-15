<template>
  <v-responsive class="text-center pa-2">
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <v-item-group>
        <v-container>
          <v-row>
            <v-col
              v-for="(data, index) in bookList"
              :key="index"
              cols="6"
              sm="4"
              md="3"
            >
              <v-item>
                <bookCard
                  :id="data.id"
                  :image="data.imagePath"
                  :ratingScore="data.averageReviewScore"
                  :ratingCount="data.reviewCount"
                  :name="data.name"
                  :price="data.price"
                  :discount="data.discount"
                />
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-lazy>
  </v-responsive>
</template>
<script>
import bookCard from "~/components/bookCard.vue";
export default {
  components: { bookCard },
  data() {
    return {
      ownerId: null,
      isActive: false,
      bookList: {
        id: "",
        image: "",
        ratingScore: "",
        ratingCount: "",
        name: "",
        price: "",
      },
    };
  },
  async fetch() {
    let userMe = await this.$auth.$storage.getState("userMe");
    this.ownerId = String(userMe.data.id);
    var payload = {
      params: {
        // "tag": this.bookTag,
      },
    };
    // console.log(this.ownerId);
    if (this.ownerId) {
      payload = {
        params: {
          "owner[]": this.ownerId,
          "isHidden":0,
        },
      };
    }
    console.log(payload);
    const resonse = await this.$axios.get(`/api/books`, payload);
    this.bookList = resonse.data["hydra:member"];
    // console.log(this.bookList);
  },
};
</script>