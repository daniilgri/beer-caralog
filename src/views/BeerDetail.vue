<template>
  <main class="beer-detail">
    <BeerDetailContent :id="+$route.params.id" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";

import BeerDetailContent from "@/components/related/BeerDetail/BeerDetailContent.vue";
import { ROUTES } from "@/router/routes";

export default Vue.extend({
  name: "BeerDetail",
  components: { BeerDetailContent },
  created() {
    if (!this.$route.params.id) {
      this.$router.push({ name: ROUTES.CATALOG });
    } else if (+this.$route.params.id <= 0) {
      this.$router.push({ name: ROUTES.CATALOG });
    }
  }
});
</script>
