<template>
  <Header></Header>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components:{
    Header
  }
}
</script>


<style>
  :root{
    --back_grey:#202020;
    --text_white:whitesmoke;
  }
  *{
    margin: 0px;
    padding: 0px;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--text_white);
    background-color: var(--back_grey);
  }
  .overflow_hidden{
      overflow: hidden;
  }
</style>
