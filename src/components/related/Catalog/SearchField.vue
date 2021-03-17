<template>
  <div class="search-filter__field search-field">
    <h5 class="search-field__name">
      {{ name }}
    </h5>
    <div class="search-field__controller">
      <Slider :value="value" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-field {
  display: flex;
  align-items: center;

  &__name {
    width: 50%;
  }

  &__controller {
    display: flex;
    width: 50%;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Slider from "../../global/Slider";

export default Vue.extend({
  name: "SearchField",
  components: { Slider },
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
});
</script>
