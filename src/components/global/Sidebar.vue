<template>
  <transition name="slide">
    <div v-if="status" class="sidebar">
      <div class="sidebar__header">
        <h2 class="sidebar__title">
          Beer Catalog
        </h2>
        <button
          class="sidebar__button close-button"
          @click="handleCloseButtonOnClick"
        >
          <svg class="close-button__svg" viewBox="0 0 53.7 53.7">
            <path
              d="M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z"
            />
          </svg>
        </button>
      </div>
      <nav class="sidebar__nav">
        <ul class="sidebar__ul">
          <li class="sidebar__li">
            <a href="#" class="sidebar__link">Beer catalog</a>
          </li>
          <li class="sidebar__li">
            <a href="#" class="sidebar__link">Favorites</a>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
$sidebarBackgroundColor: white;
$sidebarTitleColor: white;
$headerLinkDefaultColor: gray;
$root: ".sidebar";

.sidebar {
  height: 100%;
  width: 280px;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  background-color: $sidebarBackgroundColor;
  overflow-x: hidden;
  transition: 0.5s;
  border-right: 2px solid #eeeeee;

  &__header {
    background-color: #42a5f5;
    padding: 14px 28px 56px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    color: $sidebarTitleColor;
    white-space: nowrap;
  }

  &__button {
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    cursor: pointer;
  }

  &__nav {
    padding: 42px 42px 0;
  }

  &__li {
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    #{$root}__link:hover {
      color: #03a9f4;
    }
  }

  &__link {
    text-decoration: none;
    color: $headerLinkDefaultColor;
    white-space: nowrap;
  }
}

.close-button {
  height: 64px;
  width: 64px;

  &__svg {
    height: 100%;
    width: auto;
    fill: white;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: width 0.5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 0;
}
</style>

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
import { PostsMutationsTypes } from "../../store/sidebar/mutationTypes";

export default Vue.extend({
  name: "Sidebar",
  computed: {
    ...mapState("sidebar", {
      status: "open"
    })
  },
  methods: {
    ...mapMutations("sidebar", {
      toggleHeaderStatus: PostsMutationsTypes.TOGGLE
    }),
    handleCloseButtonOnClick() {
      this.toggleHeaderStatus();
    }
  }
});
</script>
