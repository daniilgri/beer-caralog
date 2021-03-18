<template>
  <svg viewBox="0 0 16 16" class="dropdown-icon">
    <path
      d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
    />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DropdownIcon"
});
</script>

<style lang="scss" scoped>
$dropdownButtonWhiteThemeColor: white;

.dropdown-icon {
  height: 100%;
  width: auto;
  fill: $dropdownButtonWhiteThemeColor;
}
</style>
