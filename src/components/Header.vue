<template>
  <header class="nav_header">
      <img class="logo_header" src="@/assets/logo.png" alt="reverse tapes logo">
      <nav class="nav_container" >
          <button class="btn_nav" v-on:click="setModalState()" v-on:focus="setModalState()"><img class="icon_menu_nav" src="@/assets/menu_white_icon.svg" alt="menu icon"></button>
          <ul class="list_elements" :class="{ open_modal: modal.state,close_modal: modal.state === false }">
              <button class="button_close_modal" v-on:click="setModalState()">close</button>
              <li class="link_container"><router-link v-on:click="setModalState()" to="/">Home</router-link></li>
              <li class="link_container"><router-link v-on:click="setModalState()" to="/shop">Shop</router-link></li>
              <li class="link_container"><router-link v-on:click="setModalState()" to="/events">Events</router-link></li>
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

        const main_container = document.querySelector('body');
        
        if (main_container.classList.contains('overflow_hidden')) {
            main_container.classList.remove('overflow_hidden')
        } else {
            main_container.classList.add('overflow_hidden')
        }
    }
  },  
}
</script>

<style scoped>
    .nav_header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.8rem 1.5rem;
    }
        .logo_header{
            height: 80px;
            width: 80px;
        }
        .nav_container{
            display: flex;
            flex-direction: row;
            /* justify-content: center; */
            align-items: center;
        }
            .open_modal{
                display: grid;
            }
            .close_modal{
                display: none;
            }
            .button_close_modal{
                border-radius: 50%;
                place-self: center;
                border-style: none;
                padding: 2rem;
            }
            .list_elements{
                z-index: 3;
                list-style: none;
                position: fixed;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                height: 100%;
                width: 100%;
                background-color: var(--back_grey);
                flex-direction: column;
                margin: 0px;
                padding: 0px;
            }
            .btn_nav{
                background-color: rgba(0, 0, 0, 0);
                border-style: none;
            }
                .icon_menu_nav{
                    height: 50px;
                    width: 50px;
                }
                .link_container{
                    font-size: 2em;
                }
                    .link_container a{
                        text-decoration: none;
                        color: var(--white_text);
                    }
    /* mobile */
    @media screen and (min-width:400px) {
        .list_elements{
            display: flex;
            flex-direction: row;
            place-items: center;
            position: relative;
            background-color: rgba(0, 0, 0, 0);
        }
        .button_close_modal{
            display: none;
        }
        .btn_nav{
            display: none;
        }
    }
</style>
