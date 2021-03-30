<template>
  <div class="app">
    <Sidebar />
    <Header />
    <router-view />
    <FlashNotification />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/global/Header.vue";
import Sidebar from "@/components/global/Sidebar.vue";
import FlashNotification from "@/components/global/FlashNotification.vue";

export default Vue.extend({
  components: {
    Header,
    Sidebar,
    FlashNotification
  }
});
</script>

<style lang="scss">
$defaultFont: "Lato", sans-serif;

body {
  font-family: $defaultFont;
}

.app {
  position: relative;
  min-height: 100vh;
}
</style>
