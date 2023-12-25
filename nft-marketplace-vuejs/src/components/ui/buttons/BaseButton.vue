<template>
  <div class="button">
    <img :src="require(`@/assets/icons/${icon}`)" alt="" />
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
  },
};
</script>

<style scoped>
.button {
  display: flex;
  height: 60px;
  padding: 0px 30px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: 20px;
  background: v-bind(bgColor);
  cursor: v-bind(cursor);
}
/* .button:hover {
  animation: slide-scale 0.5s ease-in forwards;
} */


.button img {
  height: 20px;
}

@keyframes slide-scale {
  0% {
    transform: scale(1);
  }

  70% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1.3);
  }
}
</style>
