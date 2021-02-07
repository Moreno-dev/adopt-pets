<template>
  <div id="app">
    <header-component />
    <router-view class="mt-3"/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'

export default {
  name: 'App',
  components: {
    'header-component': Header
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
