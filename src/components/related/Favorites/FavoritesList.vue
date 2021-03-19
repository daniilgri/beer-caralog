<template>
  <section class="favorites-list">
    <FavoritesItem />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import FavoritesItem from "./FavoritesItem.vue";

export default Vue.extend({
  name: "FavoritesList",
  components: { FavoritesItem }
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
