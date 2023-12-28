<template>
  <div class="top-creators">
    <div class="header">
      <div class="title">Top Creators</div>
      <div class="desc">Checkout top rated creators on the NFT marketplace</div>
      <div class="btn">
        <base-button
          name="View Rankings"
          :icon="RocketLaunchPurple"
          bgColor="transparent"
        />
      </div>
    </div>

    <div class="top-creator-list">
      <div class="col-quarter top-creator-item">
        <the-creator-vue />
      </div>
      <div class="col-quarter top-creator-item">
        <the-creator-vue />
      </div>

      <!-- <div class="grid wide">
        <div class="row">
          <div class="col l-3 m-6 c-12">
            <div class="creator-item"><the-creator-vue /></div>
          </div>
          <div class="col l-3 m-6 c-12">
            <div class="creator-item"><the-creator-vue /></div>
          </div>
          <div class="col l-3 m-6 c-12">
            <div class="creator-item"><the-creator-vue /></div>
          </div>
          <div class="col l-3 m-6 c-12">
            <div class="creator-item"><the-creator-vue /></div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/buttons/BaseButton.vue";
import RocketLaunchPurple from "../../../assets/icons/RocketLaunchPurple.svg";
import TheCreatorVue from "@/components/ui/creator/TheCreator.vue";
export default {
  data() {
    return {
      RocketLaunchIcon: require("../../../assets/icons/RocketLaunch.svg"),
      RocketLaunchPurple: RocketLaunchPurple,
    };
  },
  components: {
    BaseButton,
    TheCreatorVue,
  },
};
</script>

<style scoped>
.top-creators {
  margin: auto;
  padding: 80px 0px;
  background: #443e3e;
}
.top-creators .header {
  position: relative;
}
.top-creators .title {
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 45.6px */
  text-transform: capitalize;
}
.top-creators .desc {
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 35.2px */
  text-transform: capitalize;
}
.top-creators .btn {
  display: inline-block;
  float: inline-end;
  position: absolute;
  right: 0;
  bottom: 0;
}

.custom-image {
  /* Add CSS styles for the image */
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.custom-image path {
  stroke: black;
  fill: #f30ee4;
}
.top-creators .top-creator-item {
  width: 240px;
  height: 238px;
}
</style>
