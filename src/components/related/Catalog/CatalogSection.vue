<template>
  <div>
    <div class="catalog-section">
      <div class="catalog-section__list">
        <CatalogItem v-for="beer in beers" :key="beer.id" :item="beer" />
      </div>
      <div v-show="loading" class="catalog-section__scroll">
        <Loader />
      </div>
    </div>
    <div v-if="error">Error</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";

import CatalogItem from "./CatalogItem.vue";
import Loader from "../../global/Loader.vue";
import { BEERS_MUTATION_TYPES } from "../../../store/beers/mutationTypes";

export default Vue.extend({
  name: "CatalogSection",
  components: { CatalogItem, Loader },
  computed: {
    ...mapState("beers", {
      beers: "beers",
      loading: "loading",
      error: "error",
      limit: "limit"
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
