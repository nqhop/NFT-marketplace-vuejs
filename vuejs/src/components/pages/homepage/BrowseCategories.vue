<template>
  <div class="browse-categories">
    <p class="browse-categories-title">Browse Categories</p>
    <div class="grid wide">
      <div class="row">
        <div v-for="index in 8" :key="index" class="col l-3 m-3 c-6">
          <div class="browse-categories-item">
            <category-card-vue />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCardVue from "@/components/ui/category/CategoryCard.vue";
export default {
  components: {
    CategoryCardVue,
  },
};
</script>

<style scoped>
.browse-categories {
  margin: 80px auto;
}
.browse-categories-title {
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 45.6px */
  text-transform: capitalize;
}
.browse-categories-item {
  margin-bottom: 8px;
}
@media (min-width: 834px) {
  .browse-categories-item {
    margin-bottom: 16px;
  }
}
@media (min-width: 1280px) {
  .browse-categories-item {
    margin-bottom: 30px;
  }
}
</style>