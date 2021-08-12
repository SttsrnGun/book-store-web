<template>
  <div>
    <v-row>
      <v-col>
        <carousel />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <slideItem />    
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <slideItem />    
      </v-col>
    </v-row>
  </div>
</template>
<script>
import carousel from "../components/carousel.vue";
import slideItem from "../components/slideItem.vue";
export default {
  components: { carousel,slideItem },
  layout: "main",
};
</script>