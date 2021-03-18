<template>
  <div class="search-filter">
    <div class="search-filter__head">
      <h3 class="search-filter__title">Filter results</h3>
    </div>
    <div class="search-filter__content">
      <SearchField name="Alcohol by valume" :value="4.6" />
      <SearchField name="International Bitterness Units" :value="50" />
      <SearchField name="Color by EBC" :value="6" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchField from "./SearchField.vue";

export default Vue.extend({
  name: "SearchFilter",
  components: { SearchField }
});
</script>

<style lang="scss" scoped>
.search-filter {
  width: 35%;

  &__head {
    display: flex;
    justify-content: center;
  }

  &__title {
    font-weight: 600;
  }

  &__content {
    margin-top: 35px;
  }
}
</style>
