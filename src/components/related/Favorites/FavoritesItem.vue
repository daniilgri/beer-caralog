<template>
  <article class="favorites-item">
    <div class="favorites-item__content">
      <h4 class="favorites-item__title">Punk</h4>
      <h5 class="favorites-item__tagline">Tagline</h5>
      <p class="favorites-item__description">Lorem ipsum text</p>
    </div>
    <div class="favorites-item__image">Img</div>
    <div class="favorites-item__controllers">
      <a class="favorites-item__link" href="#">
        Open
      </a>
      <button class="favorites-item__button">
        Remove favorite
      </button>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FavoritesItem"
});
</script>

<style lang="scss" scoped>
@import "../../../styles/mixins/boxShadow.scss";

$taglineColor: gray;
$itemLinkColor: black;
$itemButtonTextColor: black;

.favorites-item {
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 10px;
  @include box-shadow(0px, 0px, 10px, 4px, rgba(0, 0, 0, 0.08));

  &__content {
    flex-basis: 80%;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
  }

  &__tagline {
    font-weight: 300;
    margin-bottom: 10px;
    color: $taglineColor;
  }

  &__image {
    flex-basis: 20%;
  }

  &__controllers {
    margin-top: 15px;
    flex-basis: 100%;
  }

  &__link {
    text-decoration: none;
    color: $itemLinkColor;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
  }

  &__button {
    color: $itemButtonTextColor;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
