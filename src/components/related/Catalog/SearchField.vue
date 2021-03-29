<template>
  <div class="search-field">
    <h5 class="search-field__name">
      {{ name }}
    </h5>
    <div class="search-field__controller">
      <Slider
        :min="min"
        :max="max"
        :value="value"
        @onSliderRangeInput="handleOnSliderRangeInput"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slider from "@/components/global/Slider.vue";

export default Vue.extend({
  name: "SearchField",
  components: { Slider },
  props: {
    name: { type: String, required: true },
    min: { type: Number, required: true },
    max: { type: Number, required: true },
    value: { type: Number, required: true }
  },
  methods: {
    handleOnSliderRangeInput(payload: number): void {
      this.$emit("onFilterOptionInput", payload);
    }
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
