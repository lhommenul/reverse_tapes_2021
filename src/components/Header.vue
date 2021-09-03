<template>
  <header class="nav_header">
      <h1>Reverse Tapes</h1>
      <nav class="nav_container">
          <ul class="list_elements">
              <li class="link_container"><a href="/">Home</a></li>
              <li class="link_container"><a href="/shop">Shop</a></li>
              <li class="link_container"><a href="/events">Events</a></li>
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
                list-style: none;
                display: flex;
                flex-direction: row;
                margin: 0px;
                padding: 0px;
            }
                .link_container{
                    
                }
                    .link_container a{
                        text-decoration: none;
                        color: var(--white_text);
                    }
</style>
