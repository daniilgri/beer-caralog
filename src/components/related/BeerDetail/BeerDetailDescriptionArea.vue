<template>
  <section class="beer-detail-description-area">
    <div class="beer-detail-description-area__info">
      <h3 class="beer-detail-description-area__title">{{ name }}</h3>
      <h4 class="beer-detail-description-area__tagline">{{ tagline }}</h4>
      <button
        v-if="isFavorite"
        class="beer-detail-description-area__button"
        @click="onDeleteFavoriteButtonClick"
      >
        Delete favorite
      </button>
      <button
        v-else
        class="beer-detail-description-area__button"
        @click="onAddFavoriteButtonClick"
      >
        Add to favorites
      </button>
      <p class="beer-detail-description-area__description">
        {{ description }}
      </p>
    </div>
    <div class="beer-detail-description-area__preview">
      <img
        :src="imageUrl"
        alt="beer"
        class="beer-detail-description-area__image"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BeerDetailDescriptionArea",
  props: {
    name: {
      type: String,
      required: true
    },
    tagline: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    onAddFavoriteButtonClick: {
      type: Function,
      required: true
    },
    onDeleteFavoriteButtonClick: {
      type: Function,
      required: true
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
$taglineColor: gray;
$beerDetailButtonTextColor: white;
$beerDetailButtonBackgroundColor: #1e88e5;

.beer-detail-description-area {
  flex-basis: 100%;
  width: 100%;
  display: flex;

  &__info {
    flex-basis: 70%;
  }

  &__preview {
    flex-basis: 30%;
    height: 200px;
    display: flex;
    justify-content: center;
  }

  &__image {
    width: auto;
    height: 100%;
  }

  &__title {
    font-weight: 600;
    font-size: 34px;
    margin-bottom: 10px;
  }

  &__tagline {
    color: $taglineColor;
    font-style: italic;
    margin-bottom: 20px;
  }

  &__button {
    cursor: pointer;
    text-transform: uppercase;
    color: $beerDetailButtonTextColor;
    background-color: $beerDetailButtonBackgroundColor;
    padding: 15px 15px;
    border: 0;
    outline: none;
    @include box-shadow(0px, 3px, 7px, 2px, rgba(0, 0, 0, 0.18));
    margin-bottom: 30px;
  }
}
</style>
