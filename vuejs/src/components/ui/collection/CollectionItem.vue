<template>
  <div class="trending-item">
    <img :src="mainImage" alt="" />
    <div class="the-rest-image">
      <div class="col-third">
        <img :src="image2" alt="" />
      </div>
      <div class="col-third">
        <img :src="image3" alt="" />
      </div>
      <div class="col-third">
        <base-button-vue name="1024+" btnHeight="100%" btnWidth="100%" />
      </div>
    </div>

    <p class="trending-name">
      {{ trendingName }}
    </p>
    <div class="creator">
      <img :src="this.creator.avatar" alt="" />
      <p class="name">{{ this.creator.name }}</p>
    </div>
  </div>
</template>

<script>
import BaseButtonVue from "../buttons/BaseButton.vue";
export default {
  components: {
    BaseButtonVue,
  },
  data() {
    return {
      defaultImage: require("../../../assets/trendings/PrimaryPhotoPlaceholder.png"),
      creator: {
        avatar: require("../../../assets/avatars/AvatarPlaceholder.svg"),
        name: "MrFox",
      },
    };
  },
  props: {
    mainImage: {
      default: require("../../../assets/trendings/PrimaryPhotoPlaceholder.png"),
      type: String,
    },
    image2: {
      default: require("../../../assets/trendings/PrimaryPhotoPlaceholder.png"),
      type: String,
    },
    image3: {
      default: require("../../../assets/trendings/PrimaryPhotoPlaceholder.png"),
      type: String,
    },
    trendingName: {
      type: String,
      default: "DSGN Animals",
    },
  },
};
</script>
<style scoped>
.trending-item img {
  border-radius: 20px;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.trending-item img:hover {
  transform: scale(0.93);
}
.the-rest-image {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.the-rest-image img {
  width: 100%;
}
.the-rest-image > div {
  width: 100px;
  height: 100px;
}
.trending-item .trending-name {
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 30.8px */
  text-transform: capitalize;
  margin-top: 15px;
}
.trending-item .creator img {
  width: 24px;
  height: 24px;
  margin-right: 12px;
}
.trending-item .creator {
  margin-top: 10px;
  display: flex;
}
.trending-item .creator .name {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
</style>
