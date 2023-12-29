<template>
  <div class="categoty-card">
    <div class="background-icon-categoty-card">
      <div class="background-categoty-card">
        <img :src="categotyBackground" alt="" />
      </div>
      <div class="icon-categoty-card">
        <img :src="categotyIcon" alt="" />
      </div>
    </div>
    <p class="categoty-card-name">{{ categoryName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    categoryName: {
      type: String,
      default: "Art",
    },
    categotyIcon: {
      type: String,
      default: require("../../../assets/categories-icons/PaintBrush.svg"),
    },
    categotyBackground: {
      type: String,
      default: require("../../../assets/categories/Image-Placeholder.svg"),
    },
  },
  components: {},
};
</script>

<style scoped>
.categoty-card {
  max-width: 240px;
  background-color: #3b3b3b;
  border-radius: 20px;
  transition: transform 0.3s ease;
}
.categoty-card:hover {
  transform: scale(0.95);
}
.background-categoty-card img{
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
}
.background-icon-categoty-card {
  position: relative;
}
.icon-categoty-card {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 20px 20px 0px 0px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(7.5px);
}
.icon-categoty-card img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.categoty-card-name {
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 30.8px */
  text-transform: capitalize;
}
.categoty-card-name {
  padding: 20px 30px 25px 30px;
}
</style>