import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/pages/homepage/HomePage.vue";
import CreateAccount from "./components/pages/createAccount/CreateAccount.vue";
import NftMarketplace from "./components/pages/marketplace/NftMarketplace.vue";
import TheRanking from "./components/pages/ranking/TheRanking.vue";
import ConnectWallet from "./components/pages/connectAWallet/ConnectWallet.vue";

import NftList from "./components/pages/marketplace/NftList.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/create-account", component: CreateAccount },
    { path: "/marketplace", component: NftMarketplace },
    {path: "/marketplace/nfts", component: NftList},
    { path: "/ranking", component: TheRanking },
    { path: "/connect-wallet", component: ConnectWallet },
  ],
  // linkActiveClass: "active",
});

export default router;
