<template>
  <div class="trending-collection">
    <p class="title">trending Collection</p>
    <p class="desc">Checkout our weekly updated trending collection.</p>
    <div class="tredding-items">
      <div class="col-third tredding-item">
        <trending-item :mainImage="PrimaryPhotoPlaceholder" trendingName="DSGN Animals"/>
      </div>

      <div class="col-third tredding-item">
        <trending-item :mainImage="PrimaryPhotoPlaceholder" />
      </div>

      <div class="col-third tredding-item">
        <trending-item :mainImage="PrimaryPhotoPlaceholder" />
      </div>
    </div>
  </div>
</template>

<script>
import TrendingItem from "@/components/ui/trending/TrendingItem.vue";
export default {
  components: { TrendingItem },
  data() {
    return {
      PrimaryPhotoPlaceholders: require("../../../assets/trendings/PrimaryPhotoPlaceholder.png"),
    };
  },
};
</script>

<style scoped>
.trending-collection {
  margin: auto;
  padding: 80px 0px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  gap: 30px;
  align-self: stretch;

  background: rgb(33, 33, 37);
}
</style>

<style scoped>
.trending-collection .title {
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 45.6px */
  text-transform: capitalize;
}
.trending-collection .desc {
  margin-top: 10px;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 35.2px */
  text-transform: capitalize;
}
.tredding-items {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.tredding-item {
  width: 330px;
}
</style>
