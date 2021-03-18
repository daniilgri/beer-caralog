<template>
  <header class="header">
    <div class="header__inner">
      <button class="header__button sidebar-button" @click="toggleHeaderStatus">
        <BurgerMenuIcon />
      </button>
      <h2 class="header__title">Beer catalog</h2>
      <button class="header__button dropdown-button">
        <DropdownIcon />
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
import { SIDEBAR_MUTATION_TYPES } from "../../store/sidebar/mutationTypes";
import DropdownIcon from "./icons/DropdownIcon.vue";
import BurgerMenuIcon from "./icons/BurgerMenuIcon.vue";

export default Vue.extend({
  name: "Header",
  components: { DropdownIcon, BurgerMenuIcon },
  methods: {
    ...mapMutations("sidebar", {
      toggleHeaderStatus: SIDEBAR_MUTATION_TYPES.TOGGLE
    })
  }
});
</script>

<style lang="scss" scoped>
$headerBackgroundColor: #42a5f5;
$headerTitleColor: white;

.header {
  width: 100%;
  background-color: $headerBackgroundColor;
  padding: 15px 0;

  &__inner {
    padding: 0 1%;
    display: flex;
    align-items: center;
  }

  &__button {
    cursor: pointer;
    outline: none;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
  }

  &__title {
    color: $headerTitleColor;
    margin-left: 1%;
    font-weight: 600;
    font-size: 18px;
  }
}

.sidebar-button {
  height: 18px;
}

.dropdown-button {
  margin-left: auto;
  height: 28px;
}
</style>
