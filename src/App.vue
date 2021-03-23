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
$defaultFont: "Lato", sans-serif;

body {
  font-family: $defaultFont;
}
</style>
