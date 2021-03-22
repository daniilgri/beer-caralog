<template>
  <article class="favorites-item">
    <div class="favorites-item__content">
      <h4 class="favorites-item__title">{{ favorite.name }}</h4>
      <h5 class="favorites-item__tagline">{{ favorite.tagline }}</h5>
      <p class="favorites-item__description">{{ favorite.description }}</p>
    </div>
    <div class="favorites-item__preview">
      <img :src="favorite.imageUrl" alt="img" class="favorites-item__img" />
    </div>
    <div class="favorites-item__controllers">
      <router-link
        class="favorites-item__link"
        :to="{ name: 'Detail', params: { id: favorite.id } }"
      >
        Open
      </router-link>
      <button class="favorites-item__button" @click="handleDeleteButtonOnClick">
        Remove favorite
      </button>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
import { FAVORITES_MUTATION_TYPES } from "../../../store/favorites/mutationTypes";

export default Vue.extend({
  name: "FavoritesItem",
  props: {
    favorite: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations("favorites", {
      deleteFavorite: FAVORITES_MUTATION_TYPES.DELETE_FAVORITE
    }),
    handleDeleteButtonOnClick() {
      this.deleteFavorite(this.favorite.id);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../../../styles/mixins/boxShadow.scss";

$taglineColor: gray;
$itemLinkColor: black;
$itemButtonTextColor: black;

.favorites-item {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 40px 40px 20px 40px;
  @include box-shadow(0px, 6px, 9px, 8px, rgba(0, 0, 0, 0.04));
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

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

  &__preview {
    flex-basis: 20%;
    height: 200px;
  }

  &__img {
    height: 100%;
    width: auto;
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
    outline: none;
  }
}
</style>
