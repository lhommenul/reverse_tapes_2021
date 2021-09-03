<template>
  <Header></Header>
  <Home msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Home from './views/Home.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Home,
    Header
  },
}
</script>

<style>
  :root{
    --back_grey : #212121;
    --white_text : whitesmoke;
  }
  body{
    margin: 0px;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--white_text);
    background-color: var(--back_grey);
    /* margin-top: 60px; */
  }
</style>
