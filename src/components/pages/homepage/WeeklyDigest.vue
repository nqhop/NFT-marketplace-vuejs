<template>
  <div class="weekly-digest b-g-c-very-dark-gray grid wide p-d-40-30 p-d-60">
    <div class="row">
      <div class="weekly-digest-image col l-6 m-6 c-12 astronaut">
        <img :src="astronautImage" alt="" />
      </div>
      <div class="weekly-digest-enter col l-6 m-6 c-12">
        <div class="f-s-section-title weekly-digest-title m-g-t-30">
          Join our weekly digest
        </div>
        <div class="f-s-section-desc weekly-digest-desc">
          Get exclusive promotions & updates straight to your inbox.
        </div>
        <div class="weekly-digest-enter-email">
          <base-input-vue />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseInputVue from "@/components/ui/input/BaseInput.vue";
export default {
  components: {
    BaseInputVue,
  },
  data() {
    return {
      astronautImage: require("../../../assets/nfts/astronaut.png"),
    };
  },
};
</script>

<style scoped>
.weekly-digest {
  border-radius: 20px;
  /* background: #3b3b3b; */
}
.weekly-digest-image {
  
}
.weekly-digest-image img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.weekly-digest-title {
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}
.weekly-digest-desc {
  margin-top: 10px;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}

/* @media (max-width: 1279px) {
    
} */
</style>