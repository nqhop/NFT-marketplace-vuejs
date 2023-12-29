<template>
  <div class="the-nft">
    <img :src="nftImage" alt="" />
    <div class="the-nft-info">
      <div class="the-nft-name">Distant Galaxy</div>
      <div class="the-nft-creator">
        <img :src="avatarDefault" alt="" />
        <p class="the-nft-creator-name">MoonDancer</p>
      </div>
      <div class="the-nft-creator-price">
        <div class="grid">
          <div class="row">
            <div class="col c-6 the-nft-creator-price-left">
              <p>Price</p>
              <p>1.63 ETH</p>
            </div>
            <div class="col c-6 the-nft-creator-price-right">
              <p>Highest Bid</p>
              <p>0.33 wETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarPlaceholder1 from "../../../assets/avatars/AvatarPlaceholder-1.svg";
export default {
  props: {
    nftImage: {
      type: String,
      default: require("../../../assets/nfts/distant-galaxy.png"),
    },
  },
  data() {
    return {
      avatarDefault: AvatarPlaceholder1,
    };
  },
};
</script>

<style scoped>
.the-nft {
  max-width: 330px;
  background-color: #3b3b3b;
  border-radius: 20px;
}
.the-nft-info {
  padding: 20px 30px 25px;
}
.the-nft-name {
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 30.8px */
  text-transform: capitalize;
}
.the-nft img {
  width: 100%;
}
.the-nft-creator {
    margin-top: 4px;
  display: flex;
}
.the-nft-creator img {
  width: 24px;
  height: 24px;
  margin-right: 12px;
}
.the-nft-creator-name {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.the-nft-creator-price {
  margin-top: 25px;
}
.the-nft-creator-price-left p:first-child,
.the-nft-creator-price-right p:first-child {
  color: #858584;
  /* font-family: 'Space Mono'; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  margin-bottom: 8px;
}

.the-nft-creator-price-right p{
    float: right;
}
</style>