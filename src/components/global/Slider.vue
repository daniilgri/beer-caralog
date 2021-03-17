<template>
  <div class="slider">
    <h6 class="slider__value">{{ value }}</h6>
    <input
      ref="sliderLine"
      class="slider__line"
      type="range"
      min="1"
      max="100"
      value="50"
      @mousemove="handleSliderLineOnMouseMove"
    />
  </div>
</template>

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
    width-webkit-appearance: none;
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

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Slider",
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  created() {
    console.log(this.$refs.sliderLine);
  },
  methods: {
    handleSliderLineOnMouseMove($event: {
      currentTarget: {
        value: number;
        getAttribute: (arg0: string) => number;
        style: { backgroundImage: string };
      };
    }) {
      const val =
        ($event.currentTarget.value -
          $event.currentTarget.getAttribute("min")) /
        ($event.currentTarget.getAttribute("max") -
          $event.currentTarget.getAttribute("min"));
      const percent = val * 100;

      $event.currentTarget.style.backgroundImage = `-webkit-gradient(linear, left top, right top, color-stop(${percent}%, #42a5f5),color-stop(${percent}%, #42a5f51f))`;
      $event.currentTarget.style.backgroundImage = `-moz-linear-gradient(left center, #42a5f5 0%, #42a5f5 ${percent}%, #42a5f51f ${percent}%, #42a5f51f 100%)`;
    }
  }
});
</script>
