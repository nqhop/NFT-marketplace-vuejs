<template>
  <div class="app">
    <the-navigation />
    <router-view></router-view>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from "./components/footer/TheFooter.vue";
import TheNavigation from "./components/nav/TheNavigation.vue";
export default {
  name: "App",
  components: {
    TheNavigation,
    TheFooter,
  },
  data() {
    return {
      widthMonitorChanging: 0,
    };
  },
  methods: {
    resizeHandler() {
      this.widthMonitorChanging = window.innerWidth;
    },
  },
  watch: {
    widthMonitorChanging() {
      this.$store.commit("monitorChanging", {
        widthMonitorChanging: this.widthMonitorChanging,
      });
    },
  },
  mounted() {
    this.widthMonitorChanging = window.innerWidth;
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeHandler);
  },
};
</script>

<style>
@import "./assets/css/grid.css";
@import "./assets//css/responsive.css";
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100&family=Work+Sans&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  --bg-dark: #2b2b2b;
  --text-color: #fff;
  --button-color: #a259ff;
  --main-color: #a259ff;
}

html {
  font-family: "Work Sans", "Helvetica", "Arial", "sans-serif";
  color: var(--text-color);

  --Background---Secondary: #3b3b3b;
  --Background: #2b2b2b;
  --caption-label-text: #858584;
  --Text: #fff;
}

.app {
  background: var(--bg-dark);
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

.scale-transition {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.scale-transition:hover {
  transform: scale(0.93);
}


/* css for vue-awesome-paginate  */
@import "vue-awesome-paginate/dist/style.css";
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
/* end css for vue-awesome-paginate  */
</style>
