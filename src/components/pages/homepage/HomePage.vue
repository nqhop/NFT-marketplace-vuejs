<template>
  <div class="homepage">
    <demo-responsive-vue/>
    <hero-section class="homepage-item" />
    <trending-collection-vue />
    <top-creators />
  </div>
</template>

<script>
import HeroSection from "./HeroSection.vue";
import TrendingCollectionVue from "./TrendingCollection.vue";
import TopCreators from "./TopCreators.vue";
import demoResponsiveVue from './demoResponsive.vue';
export default {
  components: {
    HeroSection,
    TrendingCollectionVue,
    TopCreators,
    demoResponsiveVue
  },
};
</script>

<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  background: var(--bg-dark);
}

/* 1280
834
375 */
/* .homepage > * {
  width: 1050px;
  width: 690px;
   width: 315px;
} */

@media (max-width: 833px) {
  .homepage > * {
    width: 315px;
  }
}

@media (min-width: 834px) {
  .homepage > * {
    width: 690px;
  }
}

@media (min-width: 1280px) {
  .homepage > * {
    width: 1050px;
  }
}
</style>
