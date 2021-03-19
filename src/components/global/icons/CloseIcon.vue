<template>
  <svg class="close-icon" viewBox="0 0 53.7 53.7">
    <path
      d="M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z"
    />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CloseIcon"
});
</script>

<style lang="scss" scoped>
$closeIconFillColor: white;

.close-icon {
  height: 100%;
  width: auto;
  fill: $closeIconFillColor;
}
</style>
