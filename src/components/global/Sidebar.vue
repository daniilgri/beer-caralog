<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h2 class="sidebar__title">
        Beer Catalog
      </h2>
      <button class="sidebar__button close-button">
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
</template>

<style lang="scss" scoped>
$sidebarBackgroundColor: white;
$sidebarTitleColor: white;
$headerLinkDefaultColor: gray;

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
    padding: 5% 10% 20% 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    color: $sidebarTitleColor;
  }

  &__button {
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    cursor: pointer;
  }

  &__nav {
    padding: 15% 15% 0;
  }

  &__li {
    margin-bottom: 13%;
    display: flex;
    align-items: center;
  }

  &__link {
    text-decoration: none;
    color: $headerLinkDefaultColor;
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
</style>
