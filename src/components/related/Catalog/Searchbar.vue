<template>
  <form class="searchbar" @submit.prevent="handleFormOnSubmit">
    <input
      type="text"
      placeholder="Search..."
      class="searchbar__input"
      :value="query"
      @input="handleSearchbarOnInput"
    />
    <button
      type="submit"
      class="searchbar__button"
      @click.prevent="handleFormOnSubmit"
    >
      Search
    </button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState, mapMutations } from "vuex";

import { BEERS_MUTATION_TYPES } from "@/store/beers/mutationTypes";

export default Vue.extend({
  name: "Searchbar",
  props: {
    activeFilter: { type: Function, required: true }
  },
  computed: {
    ...mapState("beers", {
      query: "query"
    })
  },
  methods: {
    ...mapActions("beers", {
      getBeersInitial: BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_REQUESTED
    }),
    ...mapMutations("beers", {
      setSearchQuery: BEERS_MUTATION_TYPES.SET_SEARCH_QUERY
    }),
    handleSearchbarOnInput(event: InputEvent) {
      const { target } = event;
      if (target) {
        this.setSearchQuery((target as HTMLInputElement).value);
      }
    },
    handleFormOnSubmit() {
      this.getBeersInitial();
      this.activeFilter();
    }
  }
});
</script>

<style lang="scss" scoped>
$searchbarInputBorderColor: #9e9e9e;

.searchbar {
  display: flex;
  flex-wrap: nowrap;
  width: 25%;
  margin-bottom: 30px;

  &__input {
    font-size: 18px;
    outline: none;
    border: 0;
    border-bottom: 1px solid $searchbarInputBorderColor;
    padding-bottom: 5px;
    width: 100%;
  }

  &__button {
    cursor: pointer;
    margin-left: 5%;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
  }
}
</style>
