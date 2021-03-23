<template>
  <div class="search-filter">
    <div class="search-filter__head">
      <h3 class="search-filter__title">Filter results</h3>
    </div>
    <div class="search-filter__content">
      <SearchField
        name="Alcohol by valume"
        :value="avm"
        :min="2"
        :max="14"
        @on-change="setAVM"
      />
      <SearchField
        name="International Bitterness Units"
        :value="ibu"
        :min="0"
        :max="120"
        @on-change="setIBU"
      />
      <SearchField
        name="Color by EBC"
        :value="ebc"
        :min="4"
        :max="80"
        @on-change="setEBC"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import SearchField from "@/components/related/Catalog/SearchField.vue";
import { BEERS_MUTATION_TYPES } from "@/store/beers/mutationTypes";

export default Vue.extend({
  name: "SearchFilter",
  components: { SearchField },
  computed: {
    ...mapState("beers", {
      avm: "avm",
      ibu: "ibu",
      ebc: "ebc"
    })
  },
  methods: {
    ...mapMutations("beers", {
      setAVM: BEERS_MUTATION_TYPES.SET_AVM_OPTION,
      setIBU: BEERS_MUTATION_TYPES.SET_IBU_OPTION,
      setEBC: BEERS_MUTATION_TYPES.SET_EBC_OPTION
    })
  }
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
