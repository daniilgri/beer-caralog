<template>
  <div class="searchbar">
    <input type="text" placeholder="Search..." class="searchbar__input" />
    <button class="searchbar__button">
      Search
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Searchbar"
});
</script>

<style lang="scss" scoped>
$searchbarInputBorderColor: #9e9e9e;

.searchbar {
  display: flex;
  flex-wrap: nowrap;
  width: 25%;
  margin-bottom: 30px;

  &__input {
    font-size: 18px;
    outline: none;
    border: 0;
    border-bottom: 1px solid $searchbarInputBorderColor;
    padding-bottom: 5px;
    width: 100%;
  }

  &__button {
    cursor: pointer;
    margin-left: 5%;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
