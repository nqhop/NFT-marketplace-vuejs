<template>
  ndtList
  <!-- <div class="grid wide">
    <div class="row">
      <div class="col l-4 m-4 c-12" v-for="index in 12" :key="index">
        <the-nft-vue />
      </div>
    </div>
  </div> -->

  <ul>
    <li v-for="index in 12" :key="index">
      <the-nft-vue />
    </li>
  </ul>

  <div class="paginate">
    <VueAwesomePaginate
      :total-items="200"
      :items-per-page="5"
      :max-pages-shown="5"
      v-model="currentPage"
      :on-click="onClickHandler"
      :show-ending-buttons="true"
      :show-breakpoint-buttons="false"
    />
  </div>
</template>

<script>
import { VueAwesomePaginate } from "vue-awesome-paginate";
import TheNftVue from "@/components/ui/nft/TheNft.vue";

export default {
  methods: {
    onClickHandler(page) {
      console.log(page);
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  components: { VueAwesomePaginate, TheNftVue },
};
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  list-style-type: none;
}
.paginate {
  margin-top: 50px;
  margin-bottom: 50px;
  justify-content: end;
  display: flex;
  column-gap: 0px;
  grid-gap: 0px;
}
</style>