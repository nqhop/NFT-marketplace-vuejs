<template>
  <div class="homepage">
    <hero-section class="homepage-item"/>
    <trending-collection-vue />
    <top-creators/>
  </div>
</template>

<script>
import HeroSection from "./HeroSection.vue";
import TrendingCollectionVue from "./TrendingCollection.vue";
import TopCreators from "./TopCreators.vue";
export default {
  components: {
    HeroSection,
    TrendingCollectionVue,
    TopCreators
  },
};
</script>

<style scoped>
.homepage{
    display: flex;
    flex-direction: column;
    background: var(--bg-dark);
}
.homepage > *{
    width: 1050px;
}
</style>