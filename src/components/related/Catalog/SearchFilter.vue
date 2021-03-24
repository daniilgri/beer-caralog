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
        :on-input="onAvmInput"
        :value="avm"
      />
      <SearchField
        name="International Bitterness Units"
        :min="0"
        :max="120"
        :on-input="onIbuInput"
        :value="ibu"
      />
      <SearchField
        name="Color by EBC"
        :min="4"
        :max="80"
        :on-input="onEbcInput"
        :value="ebc"
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
    onAvmInput: { type: Function, required: true },
    onIbuInput: { type: Function, required: true },
    onEbcInput: { type: Function, required: true },
    avm: { type: Number, required: true },
    ibu: { type: Number, required: true },
    ebc: { type: Number, required: true }
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
