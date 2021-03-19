<template>
  <main class="beer-detail">
    <BeerDetailContent :id="+$route.params.id" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import BeerDetailContent from "../components/related/BeerDetail/BeerDetailContent.vue";

export default Vue.extend({
  name: "BeerDetail",
  components: { BeerDetailContent }
});
</script>
