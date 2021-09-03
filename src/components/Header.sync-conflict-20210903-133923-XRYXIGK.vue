<template>
  <header class="nav_header">
      <h1>Reverse Tapes</h1>
      <nav class="nav_container">
          <button class="btn_nav">nav</button>
          <ul class="list_elements">
              <li class="link_container"><router-link to="/">Home</router-link></li>
              <li class="link_container"><router-link to="/shop">Shop</router-link></li>
              <li class="link_container"><router-link to="/events">Events</router-link></li>
          </ul>
      </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
  components: {
    // HelloWorld
  },
  mounted() {
      
  },
}
</script>

<style scoped>
    .nav_header{
        display: flex;
        flex-direction: row;
    }
        .nav_container{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
            .list_elements{
                display: none;
                list-style: none;
                flex-direction: row;
                margin: 0px;
                padding: 0px;
            }
                .btn_nav{
                    border-radius: 50%;
                    border-style: none;
                    height: 40px;
                    width: 40px;
                }        
                .link_container{
                    
                }
                    .link_container a{
                        text-decoration: none;
                        color: var(--white_text);
                    }
    /* mobile */
    @media screen and (min-width:400px) {
        .list_elements{
            display: flex;
        }
        .btn_nav{
            display: none;
        }
    }
</style>
