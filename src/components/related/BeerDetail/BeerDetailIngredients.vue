<template>
  <div class="beer-detail-ingredients">
    <h4 class="beer-detail-ingredients__title">Ingredients</h4>
    <ul class="beer-detail-ingredients__list">
      <li class="beer-detail-ingredients__item">
        <h6 class="beer-detail-ingredients__name">Malt</h6>
        <ul class="beer-detail-ingredients__sublist">
          <li
            v-for="malt in ingredients.malt"
            :key="malt.name"
            class="beer-detail-ingredients__subitem"
          >
            {{ malt.name }} {{ malt.amount.value }} {{ malt.amount.unit }}
          </li>
        </ul>
      </li>
      <li class="beer-detail-ingredients__item">
        <h6 class="beer-detail-ingredients__name">Hops</h6>
        <ul class="beer-detail-ingredients__sublist">
          <li
            v-for="hop in ingredients.hops"
            :key="hop.name"
            class="beer-detail-ingredients__subitem"
          >
            {{ hop.name }} - {{ hop.amount.value }} {{ hop.amount.unit }}, add
            when {{ hop.add }}
          </li>
        </ul>
      </li>
      <li class="beer-detail-ingredients__item">
        <h6 class="beer-detail-ingredients__name">Yeast</h6>
        <p class="beer-detail-ingredients__text">{{ ingredients.yeast }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BeerDetailIngredients",
  props: {
    ingredients: {
      type: Object,
      default: function() {
        return {
          malt: [],
          hops: [],
          yeast: ""
        };
      }
    }
  }
});
</script>

<style lang="scss" scoped>
$beerDetailPropertiesBorderColor: #8080806b;

.beer-detail-ingredients {
  flex-basis: 50%;
  margin-top: 20px;

  &__title {
    font-weight: 600;
    font-size: 26px;
  }

  &__list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 40%;
  }

  &__item {
    border: 1px solid $beerDetailPropertiesBorderColor;
    border-bottom: 0;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;

    &:first-child {
      border-radius: 8px 8px 0 0;
    }

    &:last-child {
      border-bottom: 1px solid $beerDetailPropertiesBorderColor;
      border-radius: 0 0 8px 8px;
    }
  }

  &__name {
    font-weight: 600;
    margin-bottom: 10px;
  }

  &__subitem {
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
