<template>
  <section class="beer-detail-food-pairing">
    <h4 class="beer-detail-food-pairing__title">Food Pairing</h4>
    <ul class="beer-detail-food-pairing__list">
      <li
        v-for="option in foodPairing"
        :key="option"
        class="beer-detail-food-pairing__item"
      >
        {{ option }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BeerDetailFoodPairing",
  props: {
    foodPairing: {
      type: Array,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
$beerDetailPropertiesBorderColor: #8080806b;

.beer-detail-food-pairing {
  flex-basis: 50%;

  &__title {
    font-weight: 600;
    font-size: 26px;
  }

  &__list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  &__item {
    border: 1px solid $beerDetailPropertiesBorderColor;
    border-bottom: 0;
    padding: 20px 15px;
    display: flex;
    align-items: center;

    &:first-child {
      border-radius: 8px 8px 0 0;
    }

    &:last-child {
      border-bottom: 1px solid $beerDetailPropertiesBorderColor;
      border-radius: 0 0 8px 8px;
    }
  }
}
</style>
