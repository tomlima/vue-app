<template>
  <header class="c-header js-header">
    <nav
      class="c-nav l-container l-flex u-justify-content-between u-align-items-center"
    >
      <a class="c-nav__logo l-flex  u-align-items-center" href="/">
        <img src="@/assets/logo.png" alt="Logo" />
      </a>

      <div class="c-nav__menu js-nav__menu">
        <ul class="c-nav__list l-flex u-align-items-center">
          <li>
            <div class="search">
              <input
                v-model="query"
                @keyup.enter="this.emitter.emit('search', this.query)"
                placeholder="Buscar um tema..."
                type="search"
              />
              <img
                @click="this.emitter.emit('search', this.query)"
                src="@/assets/search.png"
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      query: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.c-header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 200;
  background-color: #fff;
  transition: all 1s ease;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &.is-sticky {
    box-shadow: 0 1px 4px hsla(0, 4%, 15%, 0.1);
    background-color: #fff;
    transition: all 1s ease;
  }
}
.c-nav {
  position: sticky;
  top: 0;
  height: 70px;
  &__logo {
    font-size: 1.5rem;
    img {
      width: 50px;
    }
  }
  &__list {
    flex-direction: column;
    row-gap: 1.5rem;
  }
}
.search {
  height: 40px;
  position: relative;
  max-width: 300px;
  img {
    position: absolute;
    width: 15px;
    height: 15px;
    top: calc(50% - 7.5px);
    right: 15px;
    cursor: pointer;
    z-index: 100;
  }
  input {
    width: 100%;
    padding: 0px 35px 0 15px;
    border-radius: 10px;
    height: 100%;
    outline: none;
    border: 1px solid grey;
  }
}
</style>
