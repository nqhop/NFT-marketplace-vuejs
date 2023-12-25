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
      default: "50px"
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  height: 60px;
  padding: 0px v-bind(paddingHorizonral);
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: 20px;
  background: v-bind(bgColor);
  cursor: v-bind(cursor);
}
.button {
  transition: transform 0.3s ease;
}

.button:hover {
  transform: scale(0.9);
}

.button img {
  height: 20px;
}
</style>
