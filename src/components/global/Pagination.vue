<template>
  <div v-if="pageCount > 0" class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item">
        <button
          class="pagination__button"
          :disabled="isPreviousButtonDisabled"
          @click="previousPage"
        >
          Back
        </button>
      </li>
      <li
        v-for="paginationTrigger in paginationTriggers"
        :key="paginationTrigger"
        :class="{
          pagination__item_status_active: paginationTrigger === currentPage,
          pagination__item: true
        }"
      >
        <PaginationTrigger
          :page-number="paginationTrigger"
          :on-click="changePage"
        />
      </li>
      <li class="pagination__item">
        <button
          class="pagination__button"
          :disabled="isNextButtonDisabled"
          @click="nextPage"
        >
          Next
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import PaginationTrigger from "@/components/global/PaginationTrigger.vue";

export default Vue.extend({
  name: "Pagination",
  components: {
    PaginationTrigger
  },
  props: {
    currentPage: { type: Number, required: true },
    pageCount: { type: Number, required: true },
    visiblePages: { type: Number, required: true },
    nextPage: { type: Function, required: true },
    previousPage: { type: Function, required: true },
    changePage: { type: Function, required: true }
  },
  computed: {
    isPreviousButtonDisabled(): boolean {
      return this.currentPage === 1;
    },
    isNextButtonDisabled(): boolean {
      return this.currentPage >= this.pageCount;
    },
    paginationTriggers(): number[] {
      const currentPage = this.currentPage;
      const pageCount = this.pageCount;
      const visiblePagesCount =
        pageCount >= this.visiblePages ? this.visiblePages : pageCount;
      const visiblePagesThreshold = this.visiblePages - 1;
      const pagintationTriggersArray = Array(visiblePagesCount).fill(0);

      if (currentPage <= visiblePagesThreshold + 1) {
        const pagintationTriggers = pagintationTriggersArray.map(
          (paginationTrigger, index) => {
            return pagintationTriggersArray[0] + index + 1;
          }
        );
        return pagintationTriggers;
      }

      if (currentPage >= pageCount - visiblePagesThreshold + 1) {
        const pagintationTriggers = pagintationTriggersArray.map(
          (paginationTrigger, index) => {
            return pageCount - index;
          }
        );
        pagintationTriggers.reverse();
        return pagintationTriggers;
      }

      pagintationTriggersArray[0] = currentPage - visiblePagesThreshold + 1;
      const pagintationTriggers = pagintationTriggersArray.map(
        (paginationTrigger, index) => {
          return pagintationTriggersArray[0] + index;
        }
      );

      return pagintationTriggers;
    }
  }
});
</script>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  display: flex;
  justify-content: center;

  &__list {
    display: flex;
    align-items: center;
  }

  &__item {
    border: 1px solid #acacac4a;
    border-right: 0;
    color: #42a5f5;

    &:first-child {
      border-radius: 8px 0 0 8px;
    }

    &:last-child {
      border-radius: 0 8px 8px 0;
      border-right: 1px solid #acacac4a;
    }

    &_status {
      &_disabled {
        color: #9fc8ea;
      }

      &_active {
        background-color: #42a5f512;
      }
    }
  }

  &__button {
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    cursor: pointer;
    padding: 10px 20px;
    outline: none;
  }
}
</style>
