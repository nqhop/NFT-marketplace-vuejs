<template>
  <div class="top-creators grid wide">
    <div class="row">
      <div class="col l-8 m-6 c-12">
        <div class="title">Top Creators</div>
        <div class="desc">
          Checkout top rated creators on the NFT marketplace
        </div>
      </div>
      <div class="col l-4 m-6 c-0">
        <div class="btn">
          <base-button
            name="View Rankings"
            :icon="RocketLaunchPurple"
            bgColor="transparent"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div
        v-for="index in numberOfCreator"
        :key="index"
        class="col l-3 m-6 c-12"
      >
        <div class="top-creator-item">
          <the-creator-vue />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col l-0 m-0 c-12">
        <div class="btn">
          <base-button
            name="View Rankings"
            :icon="RocketLaunchPurple"
            bgColor="transparent"
          />
        </div>
      </div>
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
      height: 0,
      width: 0,
    };
  },
  components: {
    BaseButton,
    TheCreatorVue,
  },
  computed: {
    numberOfCreator() {
      if (this.width >= 1280) {
        return 12;
      } else if (this.width >= 834) {
        return 4;
      }
      return 5;
    },
  },
  methods: {
    resizeHandler() {
      this.height = window.innerHeight;
      this.width = window.innerWidth;
    },
  },
  mounted() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeHandler);
  },
};
</script>

<style scoped>
.top-creators {
  /* margin: auto;
    padding: 80px 0px; */
  background: #443e3e;
}

.top-creators .title {
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 45.6px */
  text-transform: capitalize;
}

.top-creators .desc {
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin-bottom: 40px;
  /* 35.2px */
  text-transform: capitalize;
}

.top-creators .btn {
  display: inline-block;
  float: inline-end;
}

.custom-image {
  /* Add CSS styles for the image */
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.top-creators .top-creator-item {
  margin-bottom: 12px;
}

@media (min-width: 1280px) {
  .top-creators .top-creator-item {
    margin-bottom: 24px;
  }
  .top-creators .desc{
    margin-bottom: 60px;
  }
}
</style>
