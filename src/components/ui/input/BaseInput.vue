<template>
  <div class="wrap-base-input">
    <input class="base-input height-input-button" type="text" :placeholder="placeholder" />
    <div class="base-button-on-the-right position-absolute-none m-g-t-input-button">
      <base-button-vue name="Subscribe" :icon="icon" :btnHeight="widthForBaseButton" />
    </div>
  </div>
</template>

<script>
import BaseButtonVue from "../buttons/BaseButton.vue";
export default {
  props: {
    placeholder: {
      default: "Enter Your Email Address"
    },
    baseButtonText: { default: "Subscribe" },
    icon: {}
  },
  components: {
    BaseButtonVue,
  },

  computed: {
    widthForBaseButton() {
      let temWidth = this.$store.getters.getWidthMonitorChanging;
      if (temWidth >= 1280) {
        return "60px";
      }
      return "46px";
    },
  },
};
</script>

<style scoped>
.wrap-base-input {
  position: relative;
}

.base-input {
  width: 100%;
  padding: 16px 20px;
  align-items: center;
  gap: 12px;

  color: #2b2b2b;
  font-style: normal;
  font-weight: 400;

  border-radius: 20px;
  border: 1px solid #858584;
  background: #fff;

  border: none;
  outline: none;
}

.base-input::placeholder {
  color: #686363;
  font-style: normal;
  font-weight: 400;
  font-family: "Work Sans", sans-serif;
}

.base-button-on-the-right {
  /* position: absolute;
    top: 0;
    right: 0;
    width: 50%; */
}
</style>