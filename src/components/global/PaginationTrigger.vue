<template>
  <button class="pagination-trigger" @click="onClick(pageNumber)">
    {{ pageNumber }}
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "PaginationTrigger",
  props: {
    pageNumber: { type: Number, required: true },
    onClick: { type: Function, required: true }
  }
});
</script>

<style lang="scss" scoped>
.pagination-trigger {
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  cursor: pointer;
  padding: 10px 20px;
  outline: none;
}
</style>
