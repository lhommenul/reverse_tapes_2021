<template>
  <header class="nav_header">
      <router-link class="nav_header_link" to="/"><img class="nav_header_link_img" src="../assets/icon_home_outlined.svg" alt=""><span class="nav_header_link_info">accueil</span></router-link>
      <router-link class="nav_header_link" to="/events"><img class="nav_header_link_img" src="../assets/icon_event_outlined.svg" alt=""><span class="nav_header_link_info">events</span></router-link>
      <router-link class="nav_header_link" to="/account"><img class="nav_header_link_img" src="../assets/icon_account_outlined.svg" alt=""><span class="nav_header_link_info">profile</span></router-link>
      <router-link class="nav_header_link" to="/shop"><img class="nav_header_link_img" src="../assets/icon_shop_outlined.svg" alt=""><span class="nav_header_link_info">panier</span></router-link>
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
/* font-family: 'Roboto', sans-serif; */
.nav_header{
  padding: 0.4rem 0.2rem;
  font-family: 'Roboto', sans-serif;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  background-color: whitesmoke;
}
  .nav_header_link{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
    .nav_header_link_img{
      
    }
    .nav_header_link_info{
      color: var(--back_grey);
    }
</style>
