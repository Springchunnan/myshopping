<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components:{
    FooterGuide
  },
  data(){
    return{
      title:'首页'
    }
  }
}
</script>

<style>

</style>
