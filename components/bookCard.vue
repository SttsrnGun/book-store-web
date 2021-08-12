<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :loading="loading"
      class="mx-2"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <center>
        <v-img max-width="150" max-height="200" :src="image"></v-img>
      </center>
      <v-card-text v-if="ratingScore">
        <v-row class="mx-0">
          <v-rating
            :value="ratingScore"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
          <div class="grey--text ms-4" v-if="ratingCount">
            Reviews ({{ ratingCount }})
          </div>
        </v-row>
      </v-card-text>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-text align="left">
        <div class="my-4 text-subtitle-1" v-if="price">฿ {{ price }}</div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
    },
    ratingScore: {
      type: Number,
    },
    ratingCount: {
      type: Number,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  data: () => ({
    loading: false,
  }),

  methods: {
    
  },
};
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>