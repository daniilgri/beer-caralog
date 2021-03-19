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
