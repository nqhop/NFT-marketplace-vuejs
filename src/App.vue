<template>
  <the-navigation />
  <router-view></router-view>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
export default {
  name: "App",
  components: {
    TheNavigation,
  },
};
</script>

<style>
#app {
}
</style>

<style>
@import "./assets/css/grid.css";
@import "./assets//css/responsive.css";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  --bg-dark: #2b2b2b;
  --text-color: #fff;
  --button-color: #a259ff;
}
html {
  font-family: "Work Sans", "Helvetica", "Arial", "sans-serif";
  color: var(--text-color);
}
.col-half {
  width: 50%;
}
.col-third {
  width: 33.33%;
}
.col-quarter {
  width: 25%;
}
</style>
