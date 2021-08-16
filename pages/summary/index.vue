<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>ตระกร้าสินค้า</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-simple-table dense >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">สินค้า</th>
                <th class="text-left">ราคา</th>
                <th class="text-left">จำนวน</th>
                <th class="text-left">ยอดรวม</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in bookList" :key="item.id" @click="onClickBook(item.book.id)">
                <td>
                  <div class="d-flex">
                    <v-img
                      :lazy-src="require('~/static/loading-book.jpg')"
                      contain
                      max-width="150"
                      max-height="200"
                      :src="item.book.imagePath"
                    ></v-img>
                    {{ item.book.name }}
                  </div>

                  
                </td>
                <td>{{ (item.book.price - item.book.discount).toFixed(2) }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ (item.amount * (item.book.price-item.book.discount)).toFixed(2) }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-row>
          <v-col class="d-flex justify-space-around">
            <v-btn @click="onClickGoHome()"> ซื้อสินค้าต่อ </v-btn>
            <v-btn dark @click="onClickClearCart()"> ล้างตระกร้า </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <h2 class="d-flex justify-center">Summary</h2>
        <v-row>
          <v-col> รวมยอด </v-col>
          <v-col class="d-flex flex-row-reverse"> {{ sumPrice }} </v-col>
        </v-row>
        <v-row>
          <v-col> ค่าส่ง </v-col>
          <v-col class="d-flex flex-row-reverse"> {{ deliver }} </v-col>
        </v-row>
        <v-row>
          <v-col> ยอดสุทธิ </v-col>
          <v-col class="d-flex flex-row-reverse text-decoration-underline"> {{ netPrice }} </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on" @click="onClickClearCart()">
                  Checkout
                </v-btn>
              </template>
              <span>This feature is coming soon!</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: "main",
  data() {
    return {
      bookList: [],
      sumPrice: "0",
      deliver: "0",
      netPrice: "0",
    };
  },

  async created() {
    await this.loadCartData();
  },
  methods: {
    async loadCartData() {
      this.isLoading = true;
      var response = await this.$axios.get(`/api/carts/me`); // load cart
      for (let index = 0; index < response.data.length; index++) {
        this.bookList.push(response.data[index]);
      }

      response = await this.$axios.get(`/api/carts/summary`); // load cart
      this.sumPrice = response.data.sumPrice.toFixed(2);
      this.deliver = response.data.deliver.toFixed(2);
      this.netPrice = response.data.netPrice.toFixed(2);
      
      this.isLoading = false;
    },
    onClickBook(id){
      this.$router.push("/book/" + id);
    },
    onClickGoHome(id){
      this.$router.push('/');
    },
    onClickClearCart(id) {
      this.isLoading = true;
      const response = this.$axios.post(`/api/cart/clear`);
      this.isLoading = false;
      this.$router.push('/');
    },
  },
};
</script>