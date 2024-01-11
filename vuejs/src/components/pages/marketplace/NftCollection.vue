<template>
    <div class="grid wide">
    <div class="row">
      <div class="col l-4 m-4 c-12" v-for="index in 12" :key="index">
        <collection-item/>
      </div>
    </div>
  </div>
</template>

<script>
// import CategoryCardVue from '@/components/ui/category/CategoryCard.vue';
import CollectionItem from '@/components/ui/collection/CollectionItem.vue';
export default {
    components: {CollectionItem}
}
</script>

<style scoped>

</style>