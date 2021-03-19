<template>
  <section class="beer-detail-brewing">
    <h4 class="beer-detail-brewing__title">
      Brewing
    </h4>
    <p class="beer-detail-brewing__description">{{ brewersTips }}</p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BeerDetailBrewing",
  props: {
    brewersTips: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.beer-detail-brewing {
  flex-basis: 100%;
}
</style>
