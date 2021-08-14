<template>
  <v-container>
    <v-row>
      <v-col :cols="4">
        <v-img contain max-height="350" :src="bookObj.imagePath"></v-img>
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
        <v-row>
          <v-col>
            ราคา
            {{ bookObj.price }}
          </v-col>
        </v-row>
        <v-row align="center" justify="space-around">
          <v-col>
            <v-text-field
              type="number"
              min="1"
              max="100"
              value="1"
            ></v-text-field>
          </v-col>
          <v-col>
            <center>
              <v-btn depressed color="primary"> Add </v-btn>
            </center>
          </v-col>
          <v-col>
            <v-btn depressed color="warning"> Wishlist </v-btn>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
        <v-tabs v-model="tab" grow background-color="transparent">
          <v-tab> detail </v-tab>
          <v-tab> about </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item> {{ bookObj.detail }} </v-tab-item>
          <v-tab-item> {{ bookObj.about }} </v-tab-item>
        </v-tabs-items>
    </v-row>
  </v-container>
</template>
<script>
export default {
  //   components: { carousel,slideItemDefault },
  layout: "main",
  // methods: {
  data() {
    // console.log("data");
    return {
      tab: null,
      bookObj: {
        about: "",
        averageReviewScore: "",
        detail: "",
        id: "",
        imagePath: "",
        name: "",
        price: "",
        reviewBooks: "",
        reviewCount: "",
      },
    };
  },
  //     getPosts() {
  //       butter.post
  //         .list({
  //           page: 1,
  //           page_size: 10,
  //         })
  //         .then((res) => {
  //           this.posts = res.data.data;
  //         });
  //     },
  // },
  async created() {
    const resonse = await this.$axios.get(
      `/api/books/` + this.$route.params.subId
    );
    // console.log(resonse.data);
    this.bookObj = resonse.data;
  },
};
</script>