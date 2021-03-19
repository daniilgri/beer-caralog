<template>
  <div class="beer-detail-content">
    <BeerDetailDescriptionArea
      v-if="!loading"
      :name="beer.name"
      :tagline="beer.tagline"
      :description="beer.description"
      :image-url="beer.imageUrl"
    />
    <BeerDetailProperties :abv="beer.abv" :ibu="beer.ibu" :ebc="beer.ebc" />
    <BeerDetailFoodPairing :food-pairing="beer.foodPairing" />
    <BeerDetailBrewing :brewers-tips="beer.brewersTips" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";

import { BEER_DETAIL_MUTATION_TYPES } from "../../../store/beerDetail/mutationTypes";
import BeerDetailDescriptionArea from "./BeerDetailDescriptionArea.vue";
import BeerDetailProperties from "./BeerDetailProperties.vue";
import BeerDetailFoodPairing from "./BeerDetailFoodPairing.vue";
import BeerDetailBrewing from "./BeerDetailBrewing.vue";

export default Vue.extend({
  name: "BeerDetailContent",
  components: {
    BeerDetailDescriptionArea,
    BeerDetailProperties,
    BeerDetailFoodPairing,
    BeerDetailBrewing
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState("beerDetail", {
      loading: "loading",
      error: "error",
      beer: "beer"
    })
  },
  created() {
    this.getBeer(this.id);
  },

  methods: {
    ...mapActions("beerDetail", {
      getBeer: BEER_DETAIL_MUTATION_TYPES.GET_BEER_REQUESTED
    })
  }
});
</script>

<style lang="scss" scoped>
.beer-detail-content {
  width: 90%;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
