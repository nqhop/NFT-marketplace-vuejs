<template>
  <div class="creator">
    <div class="creator-randing-number">1</div>
    <img :src="avatarDefault" alt="" />
    <div class="creator-info">
      <p class="creator-name">Keepitreal</p>
      <div class="creator-total-sales">
        <span>Total Sales:</span>
        <span> 34.53 ETH</span>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarPlaceholder1 from "../../../assets/avatars/AvatarPlaceholder-1.svg";
export default {
  data() {
    return {
      avatarDefault: AvatarPlaceholder1,
    };
  },
};
</script>

<style scoped>
.creator {
  padding: 20px;
  border-radius: 20px;
  background: #3b3b3b;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.creator:hover {
  transform: scale(0.93);
}

.creator img {
  width: 120px;
  margin: auto;
}

.creator .creator-randing-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #2b2b2b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #858584;

  position: absolute;
}

.creator-info {
  display: flex;
  flex-direction: column;
}

.creator .creator-name {
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 30.8px */
  text-transform: capitalize;
  margin: 20px auto 0;
}

.creator .creator-total-sales {
  margin: 0 auto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.creator .creator-total-sales span:first-child {
  color: #858584;
}

@media (max-width: 1279px) {
  .creator img {
    width: 60px;
    margin: auto;
  }
  .creator {
    flex-direction: row;
  }
  .creator .creator-name {
    margin-top: 0px;
  }
  .creator-info {
    width: 197px;
  }
}
</style>
