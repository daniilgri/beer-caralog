<template>
  <div class="slider">
    <h6 class="slider__value">{{ value }}</h6>
    <input
      ref="sliderLine"
      v-model="value"
      class="slider__line"
      type="range"
      :min="min"
      :max="max"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Slider",
  props: {
    value: { type: Number, required: true },
    min: { type: Number, required: true },
    max: { type: Number, required: true },
    onChange: { type: Function, required: true }
  }
});
</script>

<style lang="scss" scoped>
.slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &__value {
    width: 15%;
    font-weight: 600;
  }

  &__line {
    appearance: none;
    width: 85%;
    height: 2px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    &::-moz-range-track {
      border: none;
      background: none;
      outline: none;
    }

    &:focus {
      outline: none;
      border: none;
    }

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #42a5f5;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #42a5f5;
      cursor: pointer;
    }
  }
}
</style>
