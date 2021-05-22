<template>
  <div class="layout">
    <div id="nav" class="nav">
      <router-link to="/home">Начало</router-link>
      <router-link to="/top">Топ 5</router-link>
      <router-link to="/full">Весь список</router-link>
    </div>
    <div class="layout__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  padding: 1em 3em;
  margin-bottom: 0.3em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    display: block;
    flex: 0 1 10%;
    padding: 10px;
    border: 1px solid #42b983;
    border-radius: 5px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.layout {
  padding: 4em;

  &__content {
    min-height: 20em;
    border: 1px solid #42b983;
    border-radius: 50px;
    padding: 3em;
  }
}
</style>
