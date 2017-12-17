<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'app',
  mounted() {
    /**
    * @function 动态设置页面
    */

    Vue.directive('title', {
      inserted: function (el, binding) {
        document.title = el.dataset.title
      }
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size:0.12rem;
  color:#333;
}
</style>
