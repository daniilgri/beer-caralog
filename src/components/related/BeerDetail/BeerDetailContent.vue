<template>
  <div v-if="status === '' || status === 'succeed'" class="beer-detail-content">
    <BeerDetailDescriptionArea
      v-if="!loading"
      :name="beer.name"
      :tagline="beer.tagline"
      :description="beer.description"
      :image-url="beer.image_url"
      :on-add-favorite-button-click="handleAddFavoriteButtonOnClick"
      :on-delete-favorite-button-click="handleDeleteFavoriteButtonOnClick"
      :is-favorite="isFavorite"
    />
    <BeerDetailProperties :abv="beer.abv" :ibu="beer.ibu" :ebc="beer.ebc" />
    <BeerDetailFoodPairing :food-pairing="beer.food_pairing" />
    <BeerDetailBrewing :brewers-tips="beer.brewers_tips" />
    <BeerDetailIngredients :ingredients="beer.ingredients" />
    <BeerDetailMethod :method="beer.method" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import { mapMutations } from "vuex";

import { FAVORITES_MUTATION_TYPES } from "@/store/favorites/mutationTypes";
import { BEER_DETAIL_MUTATION_TYPES } from "@/store/beerDetail/mutationTypes";
import BeerDetailDescriptionArea from "@/components/related/BeerDetail/BeerDetailDescriptionArea.vue";
import BeerDetailProperties from "@/components/related/BeerDetail/BeerDetailProperties.vue";
import BeerDetailFoodPairing from "@/components/related/BeerDetail/BeerDetailFoodPairing.vue";
import BeerDetailBrewing from "@/components/related/BeerDetail/BeerDetailBrewing.vue";
import BeerDetailIngredients from "@/components/related/BeerDetail/BeerDetailIngredients.vue";
import BeerDetailMethod from "@/components/related/BeerDetail/BeerDetailMethod.vue";
// eslint-disable-next-line no-unused-vars
import { SingleBeer } from "@/store/favorites/interfaces";

export default Vue.extend({
  name: "BeerDetailContent",
  components: {
    BeerDetailDescriptionArea,
    BeerDetailProperties,
    BeerDetailFoodPairing,
    BeerDetailBrewing,
    BeerDetailIngredients,
    BeerDetailMethod
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
      beer: "beer"
    }),
    ...mapState("favorites", {
      favorites: "favorites"
    }),
    ...mapState("notification", {
      status: "status"
    }),
    isFavorite(): boolean {
      return (
        this.favorites.filter((el: SingleBeer) => el.id === this.beer.id)
          .length !== 0
      );
    }
  },
  created() {
    this.getBeer(this.id);
  },
  methods: {
    ...mapActions("beerDetail", {
      getBeer: BEER_DETAIL_MUTATION_TYPES.GET_BEER_REQUESTED
    }),
    ...mapMutations("favorites", {
      addFavorite: FAVORITES_MUTATION_TYPES.ADD_FAVORITE,
      deleteFavorite: FAVORITES_MUTATION_TYPES.DELETE_FAVORITE
    }),
    handleAddFavoriteButtonOnClick(): void {
      this.addFavorite(this.beer);
    },
    handleDeleteFavoriteButtonOnClick(): void {
      this.deleteFavorite(this.beer.id);
    }
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
