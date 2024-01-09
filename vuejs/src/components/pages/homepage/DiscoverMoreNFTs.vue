<template>
  <div class="discover-more-NFTs">
    <div class="grid wide">
      <div class="row">
        <div class="col l-8 m-7 c-12">
          <div class="discover-more-NFTs-header">
            <p class="discover-more-NFTs-title f-s-section-title">
              Discover more NFTs
            </p>
            <p class="discover-more-NFTs-desc f-s-section-desc">
              Explore new trending NFTs
            </p>
          </div>
        </div>
        <div class="col l-4 m-5 c-0">
          <div class="btn">
            <base-button
              name="View Rankings"
              :icon="EyePurple"
              bgColor="transparent"
            />
          </div>
        </div>
      </div>
      <div class="row list-nft-for-discover">
        <div v-for="index in 3" :key="index" class="col l-4 m-6 c-12">
          <div class="the-nft-item">
            <the-nft />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col l-0 m-0 c-12">
          <div class="btn">
            <base-button
              name="View Rankings"
              :icon="EyePurple"
              bgColor="transparent"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EyePurple from "../../../assets/icons/EyePurple.svg";
import BaseButton from "@/components/ui/buttons/BaseButton.vue";
import TheNft from "@/components/ui/nft/TheNft.vue";
export default {
  components: { BaseButton, TheNft },
  data() {
    return {
      EyePurple: EyePurple,
    };
  },
};
</script>

<style scoped>
.discover-more-NFTs {
  margin: 80px auto;
}

.discover-more-NFTs-title {
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 45.6px */
  text-transform: capitalize;
}

.discover-more-NFTs-desc {
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  /* 35.2px */
  text-transform: capitalize;
}

.discover-more-NFTs .btn {
  display: inline-block;
  float: inline-end;
}

.list-nft-for-discover {
  margin-bottom: 60px;
}
.the-nft-item {
  margin-top: 30px;
}
</style>