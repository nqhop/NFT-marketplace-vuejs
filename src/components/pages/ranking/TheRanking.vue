<template>
   <div class="ranking">
      <div class="grid wide">
         <top-creator />
         <ranking-nav/>
      </div>
   </div>
</template>

<script>
import TopCreator from './TopCreator.vue';
import RankingNav from './RankingNav.vue';
export default {
   components: { TopCreator, RankingNav },
   data() {
      return {
         time: "today"
      }
   },
   methods: {
      changrTime(time) {
         this.time = time
      }
   }
}
</script>

<style scoped></style>