<template>
  <div class="homepage">
    <hero-section class="homepage-item"/>
    <trending-collection-vue />
  </div>
</template>

<script>
import HeroSection from "./HeroSection.vue";
import TrendingCollectionVue from "./TrendingCollection.vue";
export default {
  components: {
    HeroSection,
    TrendingCollectionVue,
  },
};
</script>

<style scoped>
.homepage{
    display: flex;
    flex-direction: column;
}
.homepage > *{
    width: 1050px;
}
</style>