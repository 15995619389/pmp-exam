<template>
  <div id="app">
    <headerbox></headerbox>
    <navBox></navBox>
    <router-view></router-view>
   
  </div>
</template>

<script>
import headerbox from "./components/header/header.vue"
import navBox from "./components/nav/nav.vue"
export default {
  name: 'App',
  components:{
    headerbox,
    navBox
  }
}
</script>

<style>

</style>
