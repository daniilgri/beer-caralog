<template>
  <div class="text-error-message">
    <p class="text-error-message__value" :style="styleObject">{{ value }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TextErrorMessage",
  props: {
    value: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      styleObject: {
        color: this.color
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.text-error-message {
  text-align: center;
  padding: 50px 0;

  &__value {
    font-weight: 900;
    font-size: 50px;
  }
}
</style>
