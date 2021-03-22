<template>
  <div class="search-section">
    <Searchbar :active-filter="activeFilter" />
    <SearchFilter v-if="isFilterActive" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Searchbar from "./Searchbar.vue";
import SearchFilter from "./SearchFilter.vue";

export default Vue.extend({
  name: "SearchSection",
  components: { Searchbar, SearchFilter },
  data() {
    return {
      isFilterActive: false
    };
  },
  methods: {
    activeFilter() {
      this.isFilterActive = true;
    }
  }
});
</script>

<style lang="scss" scoped>
.search-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}
</style>
