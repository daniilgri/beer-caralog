<template>
  <div class="search-field">
    <h5 class="search-field__name">
      {{ name }}
    </h5>
    <div class="search-field__controller">
      <Slider :value="value" :min="min" :max="max" @on-change="onChange" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slider from "../../global/Slider.vue";

export default Vue.extend({
  name: "SearchField",
  components: { Slider },
  props: {
    name: { type: String, required: true },
    value: { type: Number, required: true },
    min: { type: Number, required: true },
    max: { type: Number, required: true },
    onChange: { type: Function, required: true }
  }
});
</script>

<style lang="scss" scoped>
.search-field {
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  &__name {
    width: 50%;
  }

  &__controller {
    display: flex;
    width: 50%;
  }
}
</style>
