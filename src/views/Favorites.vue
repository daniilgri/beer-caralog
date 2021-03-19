<template>
  <main class="favorites">
    <div class="favorites__head">
      <h3 class="favorites__title">Your favorite beers</h3>
    </div>
    <FavoritesList />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import FavoritesList from "../components/related/Favorites/FavoritesList.vue";

export default Vue.extend({
  name: "Favorites",
  components: { FavoritesList }
});
</script>

<style lang="scss" scoped>
.favorites {
  &__head {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
  &__title {
    font-size: 36px;
  }
}
</style>
