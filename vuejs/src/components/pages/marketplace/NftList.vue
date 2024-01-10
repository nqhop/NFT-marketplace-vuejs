<template>
  ndtList
  <VueAwesomePaginate
    :total-items="200"
    :items-per-page="5"
    :max-pages-shown="5"
    v-model="currentPage"
    :on-click="onClickHandler"
    :show-ending-buttons="true"
    :show-breakpoint-buttons="false"
  />
</template>

<script>
import { VueAwesomePaginate } from "vue-awesome-paginate";

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
  components: { VueAwesomePaginate },
};
</script>

<style scoped>
</style>