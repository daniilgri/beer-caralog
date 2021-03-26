<template>
  <form class="search-section" @submit.prevent="handleFormOnSubmit">
    <Searchbar
      :active-filter="activeFilter"
      :on-form-submit="handleFormOnSubmit"
      :query="query"
      :on-searchbar-input="handleSearchbarOnInput"
    />
    <SearchFilter
      v-if="isFilterActive"
      :avm="avm"
      :ibu="ibu"
      :ebc="ebc"
      @onAVMInput="handleAVMOptionOnInput"
      @onIBUInput="handleIBUOptionOnInput"
      @onEBCInput="handleEBCOptionOnInput"
    />
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapMutations, mapState } from "vuex";

import { BEERS_MUTATION_TYPES } from "@/store/beers/mutationTypes";
import Searchbar from "@/components/related/Catalog/Searchbar.vue";
import SearchFilter from "@/components/related/Catalog/SearchFilter.vue";

export default Vue.extend({
  name: "SearchSection",
  components: { Searchbar, SearchFilter },
  data() {
    return {
      isFilterActive: false
    };
  },
  computed: {
    ...mapState("beers", {
      query: "query",
      avm: "avm",
      ibu: "ibu",
      ebc: "ebc"
    })
  },
  methods: {
    ...mapActions("beers", {
      getBeersInitial: BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_REQUESTED
    }),
    ...mapMutations("beers", {
      setSearchQuery: BEERS_MUTATION_TYPES.SET_SEARCH_QUERY,
      setAVM: BEERS_MUTATION_TYPES.SET_AVM_OPTION,
      setIBU: BEERS_MUTATION_TYPES.SET_IBU_OPTION,
      setEBC: BEERS_MUTATION_TYPES.SET_EBC_OPTION
    }),
    activeFilter(): void {
      this.isFilterActive = true;
    },
    handleSearchbarOnInput(event: InputEvent): void {
      const { target } = event;
      if (target) {
        this.setSearchQuery((target as HTMLInputElement).value);
      }
    },
    handleAVMOptionOnInput(payload: number): void {
      this.setAVM(payload);
    },
    handleIBUOptionOnInput(payload: number): void {
      this.setIBU(payload);
    },
    handleEBCOptionOnInput(payload: number): void {
      this.setEBC(payload);
    },
    handleFormOnSubmit(): void {
      this.getBeersInitial();

      if (!this.isFilterActive) {
        this.activeFilter();
      }
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
