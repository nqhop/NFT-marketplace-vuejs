<template>
  <div class="wrapper">
    <div class="logo">
      <img src="@/assets/icons/Storefront.svg" alt="" />
      <p>NFT Marketplace</p>
    </div>
    <div class="navigateItem">
      <ul>
        <li>
          <router-link to="#">Marketplace</router-link>
        </li>
        <li>
          <router-link to="#">Rankings</router-link>
        </li>
        <li>
          <router-link to="#">Connect a wallet</router-link>
        </li>
        <li>
          <base-button name="Sign up" icon="User.svg" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseButton from "../ui/buttons/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
};
</script>

<style scoped>
.wrapper {
  background: var(--bg-dark);
  display: flex;
  height: 100px;
  padding: 20px 50px;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
ul {
  list-style-type: none;
}
ul li {
  display: inline-block;
  margin: 0 20px;
}
ul li a {
  text-decoration: none;
  color: var(--text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
}
ul li a:hover {
  cursor: context-menu;
}
.logo {
  display: flex;
}
.logo p {
  margin-left: 12px;
  line-height: 32px;
  font-size: 22px;
}
.logo path {
    stroke: #f30ee4;
}
</style>
