<template>
  <section class="beer-detail-properties">
    <h4 class="beer-detail-properties__title">Properties</h4>
    <ul class="beer-detail-properties__list">
      <li class="beer-detail-properties__item">
        <h6 class="beer-detail-properties__name">ABV</h6>
        <div>*</div>
        <p class="beer-detail-properties__value">{{ abv }}</p>
      </li>
      <li class="beer-detail-properties__item">
        <h6 class="beer-detail-properties__name">IBU</h6>
        <div>*</div>
        <p class="beer-detail-properties__value">{{ ibu }}</p>
      </li>
      <li class="beer-detail-properties__item">
        <h6 class="beer-detail-properties__name">EBC</h6>
        <div>*</div>
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
.beer-detail-properties {
  flex-basis: 50%;
}
</style>
