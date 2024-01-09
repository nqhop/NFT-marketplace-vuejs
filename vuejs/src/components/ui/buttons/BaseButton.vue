<template>
  <div class="button">
    <!-- <img :src="require(`@/assets/${icon}`)" alt="" /> -->
    <img :src="icon" alt="" />
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    cursor: {
      default: "pointer",
    },
    name: {
      type: String,
      default: "Button",
    },
    bgColor: {
      default: "#A259FF",
    },
    icon: {
      type: String,
    },
    paddingHorizonral: {
      type: String,
      default: "50px",
    },
    btnHeight: {
      type: String,
      default: "60px",
    },
    btnWidth: {
      type: String,
      default: "revert-layer",
    },
  },
  methods: {
    border() {
      if (this.bgColor != "transparent") {
        return "";
      }
      return "2px solid #A259FF";
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  height: v-bind(btnHeight);
  width: v-bind(btnWidth);
  padding: 0px v-bind(paddingHorizonral);
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: v-bind(border());

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  border-radius: 20px;
  background: v-bind(bgColor);
  cursor: v-bind(cursor);
}
.button {
  transition: transform 0.3s ease;
}

.button:hover {
  transform: scale(0.93);
}

.button img {
  height: 20px;
}
</style>
