<template>
  <main class="catalog">
    <SearchSection />
    <CatalogSection />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import SearchSection from "@/components/related/Catalog/SearchSection.vue";
import CatalogSection from "@/components/related/Catalog/CatalogSection.vue";

export default Vue.extend({
  name: "Catalog",
  components: { SearchSection, CatalogSection }
});
</script>
