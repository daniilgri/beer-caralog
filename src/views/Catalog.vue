<template>
  <main class="catalog">
    <SearchSection />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import SearchSection from "../components/related/Catalog/SearchSection";

export default Vue.extend({
  name: "Catalog",
  components: { SearchSection }
});
</script>
