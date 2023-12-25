import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/pages/homepage/HomePage.vue";
import CreateAccount from "./components/pages/createAccount/CreateAccount.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/homepage", component: HomePage },
    { path: "/create-account", component: CreateAccount },
  ],
});

export default router;
