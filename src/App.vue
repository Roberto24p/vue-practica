<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <create-player></create-player>
    <table-elements></table-elements>
  </div>
</template>

<script>
import  TableElements from "./components/TableElements.vue"
import CreatePlayer from "./components/CreatePlayer.vue"
export default {
  name: 'App',
  components: {
    TableElements,
    CreatePlayer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
