<template>
    <form class="container_form">
      <h1 class="title">T-Shirt</h1>
      <p class="price"><img src="@/assets/price_white.svg" alt="price">3.00€</p>
      <label class="quantity">
        Quantité
        <input type="number" :value="2" placeholder="quantité">
      </label>
      <label class="size">
        Taille
        <select name="" id="">
          <option :value="'L'">L</option>
          <option :value="'M'" selected>M</option>
          <option :value="'XL'">XL</option>
        </select>
      </label>
      <button class="add_basket">
        Ajouter au panier
      </button>
    </form>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Boutique',
  components: {
    
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped>
    .container_form{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-template-rows: auto auto;
      gap: 1rem;
      font-size: 1rem;
    }
      input,select,.add_basket{
        padding: 0.5em 0.8em;
        border-radius: 2rem;
        border-style: none;
      }
        .title{
            grid-row: 1;
            grid-column: 1;
        }
        .price{
            grid-row: 1;
            grid-column: 2;
            display: flex;
            flex-direction: row;
            place-self: center;
        }
            .price > img{

            }
        .size{
            display: flex;
            flex-direction: column;
          grid-column: 2;
          grid-row: 2;
        }
        .quantity{
          grid-column: 1;
          grid-row: 2;
        }
        .add_basket{
            font-size: 1.1rem;
            grid-row: 3;
          grid-column: 1/-1;
        }
</style>
