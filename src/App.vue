<template>
  <div class="uk-container">
    <router-view/>
  </div>
  <Header></Header>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components:{
    Header
  },
  mounted() {

  },
}
</script>


<style>
  :root{
    --back_grey:#202020;
    --text_white:whitesmoke;
    --beige:#FFF5CA;
  }
  *{
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  body{
    max-width: 100vw;
  }
  #app {
    min-height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--text_white);
    background-color: whitesmoke;
    display: grid;
    grid-template-columns: minmax(4%,auto) auto minmax(4%,auto);
  }
    #app > *{
      grid-column: 2;
    }
  ul{
    padding: 0;
  }
</style>
