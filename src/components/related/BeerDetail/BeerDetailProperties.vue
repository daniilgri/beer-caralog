<template>
  <section class="beer-detail-properties">
    <h4 class="beer-detail-properties__title">Properties</h4>
    <ul class="beer-detail-properties__list">
      <li class="beer-detail-properties__item">
        <h6 class="beer-detail-properties__name">ABV</h6>
        <div class="beer-detail-properties__info">
          i<span class="beer-detail-properties__tooltip">ABV</span>
        </div>
        <p class="beer-detail-properties__value">{{ abv }}</p>
      </li>
      <li class="beer-detail-properties__item">
        <h6 class="beer-detail-properties__name">IBU</h6>
        <div class="beer-detail-properties__info">
          i<span class="beer-detail-properties__tooltip">IBU</span>
        </div>
        <p class="beer-detail-properties__value">{{ ibu }}</p>
      </li>
      <li class="beer-detail-properties__item">
        <h6 class="beer-detail-properties__name">EBC</h6>
        <div class="beer-detail-properties__info">
          i<span class="beer-detail-properties__tooltip">EBC</span>
        </div>
        <p class="beer-detail-properties__value">{{ ebc }}</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BeerDetailProperties",
  props: {
    abv: {
      type: Number,
      required: true
    },
    ibu: {
      type: Number,
      required: true
    },
    ebc: {
      type: Number,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
$BeerDetailPropertiesValueColor: white;
$BeerDetailPropertiesValueBackgroundColor: gray;
$beerDetailPropertiesBorderColor: #8080806b;
$beerDetailPropertiesInfoColor: gray;
$root: ".beer-detail-properties";

.beer-detail-properties {
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
    padding: 12px 15px;
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

  &__name {
    font-weight: 600;
  }

  &__value {
    margin-left: auto;
    background-color: $BeerDetailPropertiesValueBackgroundColor;
    color: $BeerDetailPropertiesValueColor;
    padding: 8px;
    border-radius: 12px;
  }

  &__info {
    color: $beerDetailPropertiesInfoColor;
    border: 1px solid $beerDetailPropertiesInfoColor;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    position: relative;

    &:hover {
      #{$root}__tooltip {
        visibility: visible;
      }
    }
  }

  &__tooltip {
    visibility: hidden;
    background-color: rgb(82, 82, 82);
    color: #fff;
    text-align: center;
    padding: 5px 5px;
    border-radius: 8px;
    font-size: 14px;
    position: absolute;
    left: 110%;
    z-index: 1;
    cursor: pointer;
  }
}
</style>
