<template>
    <div class="grid wide">
    <div class="row">
      <div class="col l-4 m-4 c-12" v-for="index in 12" :key="index">
        <category-card-vue/>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCardVue from '@/components/ui/category/CategoryCard.vue';
export default {
    components: {CategoryCardVue}
}
</script>

<style scoped>

</style>