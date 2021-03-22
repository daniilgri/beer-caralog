<template>
  <section class="favorites-list">
    <FavoritesItem
      v-for="favorite in favorites"
      :key="favorite.id"
      :favorite="favorite"
    />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import FavoritesItem from "./FavoritesItem.vue";

export default Vue.extend({
  name: "FavoritesList",
  components: { FavoritesItem },
  computed: {
    ...mapState("favorites", {
      favorites: "favorites"
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
}
</style>
