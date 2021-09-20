<template>
  <header class="nav_header">
      
      <router-link to="/" class="link_to_home"><img class="logo_header" src="@/assets/logo.png" alt="reverse tapes logo"></router-link>
      <div class="container_right_section">
        <router-link class="link_to_basket f_row" to="/basket"><img class="img_backet" src="@/assets/basket.svg" alt="basket"><span class="tip">{{$store.state.basket.products.length}}</span></router-link>
        <button class="btn_nav" v-on:click="setModalState()"><img class="icon_menu_nav" src="@/assets/menu.svg" alt="menu icon"></button>
      </div>
      <nav class="nav_container do_not_display">
          <ul class="list_elements" :class="{ open_modal: modal.state,close_modal: modal.state === false }">
              <button class="nav_containerbutton_close_modal" v-on:click="setModalState()"><img src="@/assets/close.svg" alt="close"></button>
              <li class="link_container"><router-link v-on:click="setModalState()" to="/">Home</router-link></li>
              <li class="link_container"><router-link v-on:click="setModalState()" to="/shop">Shop</router-link></li>
              <li class="link_container"><router-link v-on:click="setModalState()" to="/events">Events</router-link></li>
              <li class="link_container"><router-link v-on:click="setModalState()" to="/product?id=651655">Boutique</router-link></li>
          </ul>
      </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data() {
      return {
          modal:{
              state:false
          }
      }
  },
  components: {
    // HelloWorld
  },
  mounted() {
      
  },
  methods: {
    setModalState(){
        this.modal.state = !this.modal.state;

        const main_container = document.querySelector('.nav_container');
        
        if (main_container.classList.contains('do_not_display')) {
            main_container.classList.remove('do_not_display')
        } else {
            main_container.classList.add('do_not_display')
        }
    }
  },  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    .nav_header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 3rem;
      padding: 0rem 1rem;
    }
      .link_to_home{
        height: 100%;
        display: flex;
      }
        .logo_header{
          place-self: center;
          height: 80%;
        }
      .container_right_section{
        display: flex;
        flex-direction: row;
        place-items: center;
      }
        .link_to_basket{
          display: flex;
          flex-direction: row;
          place-items: center;
        }
          .img_backet{
            
          }
          .tip{
            font-family: 'Roboto', sans-serif;
            transform: translate(-0.5rem,-0.5rem);
            justify-self: center;
            align-self: center;
            padding: 0.4rem;
            text-align: center;
            border-radius: 50%;
            color: white;
            display: flex;
            justify-content: center;
          }
        .btn_nav{
          background-color: rgba(0, 0, 0, 0);
          border-style: none;
          height: 2rem;
          width: 2rem;
        }
      .nav_container{
        z-index: 1000;
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--back_grey);
        animation: open 0.4s;
      }
        .list_elements{
          text-align: left;
          padding: 0px;
          display: flex;
          flex-direction: column;
        }
        .list_elements a{
          font-size: 1.5rem;
          color: var(--text_white);
        }
          .nav_containerbutton_close_modal{
            background-color: rgba(0, 0, 0, 0);
            border-style: none;
          }
      .do_not_display{
        height: 0px;
          /* animation-fill-mode: forwards; */
        animation: close 0.4s forwards;
      }
      @keyframes close{
        from{
          height: 100%;
        }to{
          overflow: hidden;
          visibility: hidden;
          height: 0px;
          /* overflow: hidden; */
        }
      }
      @keyframes open{
        from{
          height: 0px;
        }to{
          height: 100%;
          /* overflow: hidden; */
        }
      }
</style>
