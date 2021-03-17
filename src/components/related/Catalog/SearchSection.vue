<template>
  <div class="search-section">
    <Searchbar />
    <SearchFilter />
  </div>
</template>

<style lang="scss" scoped>
.search-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  &__searchbar {
    margin-bottom: 30px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Searchbar from "./Searchbar.vue";
import SearchFilter from "./SearchFilter.vue";

export default Vue.extend({
  name: "SearchSection",
  components: { Searchbar, SearchFilter }
});
</script>
