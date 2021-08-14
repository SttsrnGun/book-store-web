<template>
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
</template>
<script>
export default {
  //   components: { carousel,slideItemDefault },
  layout: "main",
  // methods: {
  data() {
    console.log("data");
    return {
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
    console.log(resonse.data);
    this.bookObj = resonse.data;
  },
};
</script>