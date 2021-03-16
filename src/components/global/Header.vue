<template>
  <header class="header">
    <div class="header__inner">
      <button class="header__button sidebar-button">
        <svg viewBox="0 0 100 70" class="sidebar-button__svg">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </button>
      <h2 class="header__title">Beer catalog</h2>
      <button class="header__button dropdown-button">
        <svg viewBox="0 0 16 16" class="dropdown-button__svg">
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<style lang="scss">
$headerBackgroundColor: #42a5f5;
$headerTitleColor: white;
$sidebarButtonWhiteThemeColor: white;
$dropdownButtonWhiteThemeColor: white;

.header {
  width: 100%;
  background-color: $headerBackgroundColor;

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

  &__svg {
    height: 100%;
    width: auto;
    fill: $sidebarButtonWhiteThemeColor;
  }
}

.dropdown-button {
  margin-left: auto;
  height: 28px;

  &__svg {
    height: 100%;
    width: auto;
    fill: $dropdownButtonWhiteThemeColor;
  }
}
</style>
