<template>
  <div class="search-filter">
    <div class="search-filter__head">
      <h3 class="search-filter__title">Filter results</h3>
    </div>
    <div class="search-filter__content">
      <SearchField
        name="Alcohol by valume"
        :min="2"
        :max="14"
        :value="avm"
        @onFilterOptionInput="handleAVMInput"
      />
      <SearchField
        name="International Bitterness Units"
        :min="0"
        :max="120"
        :value="ibu"
        @onFilterOptionInput="handleIBUInput"
      />
      <SearchField
        name="Color by EBC"
        :min="4"
        :max="80"
        :value="ebc"
        @onFilterOptionInput="handleEBCInput"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchField from "@/components/related/Catalog/SearchField.vue";

export default Vue.extend({
  name: "SearchFilter",
  components: { SearchField },
  props: {
    avm: { type: Number, required: true },
    ibu: { type: Number, required: true },
    ebc: { type: Number, required: true }
  },
  methods: {
    handleAVMInput(payload: number): void {
      this.$emit("onAVMInput", payload);
    },
    handleIBUInput(payload: number): void {
      this.$emit("onIBUInput", payload);
    },
    handleEBCInput(payload: number): void {
      this.$emit("onEBCInput", payload);
    }
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
