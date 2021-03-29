<template>
  <div>
    <div v-if="!error" class="catalog-section">
      <div class="catalog-section__list">
        <CatalogItem
          v-for="beer in beers"
          :key="beer.id"
          :item="beer"
          :on-add-favorite="addFavorite"
          :on-delete-favorite="deleteFavorite"
          :is-favorite="isFavorite"
        />
      </div>
      <div v-show="loading" class="catalog-section__scroll">
        <Loader />
      </div>
    </div>
    <TextErrorMessage v-else :value="error" color="#7f94a594" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState, mapMutations } from "vuex";

import CatalogItem from "@/components/related/Catalog/CatalogItem.vue";
import Loader from "@/components/global/Loader.vue";
import { BEERS_MUTATION_TYPES } from "@/store/beers/mutationTypes";
import { FAVORITES_MUTATION_TYPES } from "@/store/favorites/mutationTypes";
// eslint-disable-next-line no-unused-vars
import { SingleBeer } from "@/store/beers/interfaces";
// eslint-disable-next-line no-unused-vars
import { SingleBeer as SingleFavoriteBeer } from "@/store/favorites/interfaces";
import TextErrorMessage from "@/components/global/TextErrorMessage.vue";

export default Vue.extend({
  name: "CatalogSection",
  components: { CatalogItem, Loader, TextErrorMessage },
  computed: {
    ...mapState("beers", {
      beers: "beers",
      loading: "loading",
      error: "error",
      limit: "limit"
    }),
    ...mapState("favorites", {
      favorites: "favorites"
    })
  },
  beforeMount() {
    this.getBeersInitial();
  },
  mounted() {
    this.scroll();
  },
  methods: {
    ...mapActions("beers", {
      getBeersInitial: BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_REQUESTED,
      getBeersNext: BEERS_MUTATION_TYPES.GET_BEERS_NEXT_REQUESTED
    }),
    ...mapMutations("favorites", {
      addFavorite: FAVORITES_MUTATION_TYPES.ADD_FAVORITE,
      deleteFavorite: FAVORITES_MUTATION_TYPES.DELETE_FAVORITE
    }),
    isFavorite(currentEl: SingleBeer): boolean {
      return (
        this.favorites.filter(
          (el: SingleFavoriteBeer) => el.id === currentEl.id
        ).length !== 0
      );
    },
    scroll() {
      window.addEventListener("scroll", () => {
        const {
          scrollTop,
          scrollHeight,
          clientHeight
        } = document.documentElement;

        if (clientHeight + scrollTop >= scrollHeight) {
          this.getBeersNext();
        }
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.catalog-section {
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  &__scroll {
    display: flex;
    justify-content: center;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
