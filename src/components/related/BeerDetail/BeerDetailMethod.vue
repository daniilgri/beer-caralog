<template>
  <div class="beer-detail-method">
    <h4 class="beer-detail-method__title">Method</h4>
    <div class="beer-detail-method__section">
      <h6 class="beer-detail-method__name">Mash</h6>
      <ul class="beer-detail-method__list">
        <li
          v-for="(mash, index) in method.mashTemp"
          :key="index"
          class="beer-detail-method__option"
        >
          <p class="beer-detail-method__duration">{{ mash.duration }}</p>
          <p class="beer-detail-method__temp">
            {{ mash.temp.value }} {{ mash.temp.unit }}
          </p>
        </li>
      </ul>
    </div>
    <div class="beer-detail-method__section">
      <h6 class="beer-detail-method__name">Fermentation</h6>
      Perform at {{ method.fermentation.temp.value }}
      {{ method.fermentation.temp.unit }}
    </div>
    <div class="beer-detail-method__section">
      <h6 class="beer-detail-method__name">Twist</h6>
      {{ method.twist }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BeerDetailMethod",
  props: {
    method: {
      type: Object,
      default: function() {
        return {
          fermentation: { temp: { unit: "", value: "" } },
          mashTemp: [],
          twist: ""
        };
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.beer-detail-method {
  flex-basis: 50%;
  margin-top: 20px;

  &__title {
    font-weight: 600;
    font-size: 26px;
    margin-bottom: 31px;
  }

  &__section {
    margin-top: 20px;
  }

  &__name {
    font-weight: 600;
    margin-bottom: 10px;
  }

  &__option {
    display: flex;
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
