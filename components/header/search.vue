<template>
  <div class="my-3" max-width="300">
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      dense
      rounded
      hide-details
      clearable
      hide-selected
      item-text="name"
      item-value="symbol"
      label="Search for a book..."
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title>
            Search for your favorite
            <strong>Book</strong>
          </v-list-item-title>
        </v-list-item>
      </template>
      <template v-slot:item="{ item }">
        <v-list-item-avatar
          color="indigo"
          class="text-h5 font-weight-light white--text"
        >
          <v-img
        :src="item.imagePath"
        alt="John"
      ></v-img>
        </v-list-item-avatar>
        <v-list-item-content @click="onClickApprove(item.id)">
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>
        
      </template>
    </v-autocomplete>
  </div>
</template>
<script>
export default {
  data: () => ({
    isLoading: false,
    items: [],
    model: null,
    search: null,
    tab: null,
  }),

  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    async search(val) {
      if(val){
        this.isLoading = true;
        var response = await this.fetchItem(val);
        this.items = response['data'];
        
      }
    },
  },
  methods: {
    onClickApprove(id){
      this.$router.push('/book/'+id)
    },
    async fetchItem(keyword) {
      const payload = {
        params: {
          keyword: keyword,
        },
      };
      const resonse = await this.$axios.get(`/api/search/book`, payload);
      this.isLoading = false;
      return resonse;
    },
  },
};
</script>