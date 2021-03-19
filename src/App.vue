<template>
  <div>
    <Sidebar />
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/global/Header.vue";
import Sidebar from "./components/global/Sidebar.vue";

export default Vue.extend({
  components: {
    Header,
    Sidebar
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap");
@import "./styles/base/reset.scss";

$defaultFont: "Lato", sans-serif;

body {
  font-family: $defaultFont;
}
</style>
