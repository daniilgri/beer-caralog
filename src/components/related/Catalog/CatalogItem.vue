<template>
  <article class="catalog-item">
    <div class="catalog-item__head"></div>
    <div class="catalog-item__body">
      <h5 class="catalog-item__title">{{ item.name }}</h5>
      <h6 class="catalog-item__tagline">{{ item.tagline }}</h6>
      <div class="catalog-item__controllers">
        <a class="catalog-item__link" href="#">
          Open
        </a>
        <button class="catalog-item__button">
          Favorite
        </button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CatalogItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
$itemBodyBackgroundColor: gray;
$itemTitleColor: white;
$itemTaglineColor: white;
$itemLinkColor: white;
$itemButtonTextColor: white;

.catalog-item {
  width: 23%;
  margin: 10px;

  &__head {
    height: 130px;
    background: #80808014;
  }

  &__body {
    background-color: $itemBodyBackgroundColor;
    box-sizing: border-box;
    padding: 20px;
  }

  &__title {
    color: $itemTitleColor;
    font-size: 18px;
    margin-bottom: 15px;
  }

  &__tagline {
    display: flex;
    font-weight: 300;
    color: $itemTaglineColor;
    margin-bottom: 15px;
  }

  &__button {
    color: $itemButtonTextColor;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    cursor: pointer;
  }

  &__link {
    text-decoration: none;
    color: $itemLinkColor;
  }
}
</style>
