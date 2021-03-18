<template>
  <svg viewBox="0 0 100 70" class="burger-menu-icon">
    <rect width="100" height="10"></rect>
    <rect y="30" width="100" height="10"></rect>
    <rect y="60" width="100" height="10"></rect>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BurgerMenuIcon"
});
</script>

<style lang="scss" scoped>
$sidebarButtonWhiteThemeColor: white;

.burger-menu-icon {
  height: 100%;
  width: auto;
  fill: $sidebarButtonWhiteThemeColor;
}
</style>
