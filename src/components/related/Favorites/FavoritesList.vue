<template>
  <section class="favorites-list">
    <FavoritesItem
      v-for="favorite in favoritesPerPage"
      :key="favorite.id"
      :favorite="favorite"
    />
    <Pagination
      :current-page="currentPage"
      :page-count="pageCount"
      :visible-pages="visiblePagesCount"
      :next-page="nextPage"
      :previous-page="previousPage"
      :change-page="changePage"
    />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations, mapGetters } from "vuex";

import FavoritesItem from "@/components/related/Favorites/FavoritesItem.vue";
import Pagination from "@/components/global/Pagination.vue";
import { FAVORITES_MUTATION_TYPES } from "@/store/favorites/mutationTypes";

export default Vue.extend({
  name: "FavoritesList",
  components: { FavoritesItem, Pagination },
  computed: {
    ...mapState("favorites", {
      currentPage: "currentPage",
      pageCount: "pageCount",
      visiblePagesCount: "visiblePagesCount"
    }),
    ...mapGetters("favorites", {
      favoritesPerPage: "favoritesPerPage"
    })
  },
  methods: {
    ...mapMutations("favorites", {
      nextPage: FAVORITES_MUTATION_TYPES.NEXT_PAGE,
      previousPage: FAVORITES_MUTATION_TYPES.PREVIOUS_PAGE,
      changePage: FAVORITES_MUTATION_TYPES.CHANGE_PAGE
    })
  }
});
</script>

<style lang="scss" scoped>
.favorites-list {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}
</style>
