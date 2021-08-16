<template>
  <v-container>
    <v-row>
      <v-col :cols="4">
        <v-img
          contain
          max-height="350"
          :lazy-src="require('~/static/loading-book.jpg')"
          :src="bookObj.imagePath"
        ></v-img>
      </v-col>
      <v-col :cols="8">
        <v-row>
          <v-col>
            <h1>
              {{ bookObj.name }}
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ bookObj.about }}
          </v-col>
        </v-row>
        <v-row v-if="bookObj.discount">
          <v-col>
            ราคา
            {{ (bookObj.price - bookObj.discount).toFixed(2) }}
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col>
            ราคา
            {{ bookObj.price }}
          </v-col>
        </v-row>
        <v-row align="center" justify="space-around">
          <v-col>
            <v-text-field
              type="number"
              min="0"
              max="100"
              :value="amount"
              v-model="amount"
            ></v-text-field>
          </v-col>
          <v-col>
            <center>
              <v-btn depressed color="primary" @click="onClickAdd(bookObj.id)">
                Add
              </v-btn>
            </center>
          </v-col>
          <v-col>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="warning" dark v-bind="attrs" v-on="on">
                  Wishlist
                </v-btn>
              </template>
              <span>This feature is coming soon!</span>
            </v-tooltip>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-tabs v-model="tab" grow background-color="transparent">
        <v-tab> Detail </v-tab>
        <v-tab> Author </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item> {{ bookObj.detail }} </v-tab-item>
        <v-tab-item> {{ bookObj.about }} </v-tab-item>
      </v-tabs-items>
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
  </v-container>
</template>
<script>
import slideItem from "/components/slideItem.vue";
export default {
  components: { slideItem },
  layout: "main",
  data() {
    return {
      tab: null,
      amount: 1,
      bookObj: {
        about: "",
        averageReviewScore: "",
        detail: "",
        id: "",
        imagePath: "",
        name: "",
        price: "",
        discount: "",
        reviewBooks: "",
        reviewCount: "",
      },
    };
  },

  async created() {
    let resonse = await this.$axios.get(
      `/api/books/` + this.$route.params.subId
    );
    this.bookObj = resonse.data;

    const payload = {
      params: {
        bookId: this.$route.params.subId,
      },
    };

    resonse = await this.$axios.get(`/api/carts/me`, payload);
    if(resonse.data[0]){
      this.amount = resonse.data[0].amount;
    }
  },
  methods: {
    async onClickAdd(id) {
      this.isLoading = true;
      const payload = {
        bookId: id,
        amount: this.amount,
      };
      let resonse = await this.$axios.post(`/api/cart/add`, payload);
      this.isLoading = false;
      await this.$router.push("/summary");
    },
  },
};
</script>