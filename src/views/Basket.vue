<template>
    <section>

        <h2 v-if="$store.state.basket.products.length <= 0">Pas de Produits dans le Panier</h2>

        <table v-else>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Size</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in $store.state.basket.products" :key="index">
                    <td><img :src="$store.state.server_address+item.thumbnail" alt="basket picture"></td>
                    <td><p>{{item.name}}</p></td>
                    <td><p>{{item.quantity}}</p></td>
                    <td><p>{{item.size}}</p></td>
                    <button v-on:click="deleteProduct(item.id)">X</button>
                </tr>
            </tbody>
        </table>      
        <button v-on:click="checkIfConnected">Passer au payement</button>  
    </section>
</template>

<script>
export default {
    methods:{
        deleteProduct(id){
            this.$store.commit("removeProductFromBasket",id)
        },
        checkIfConnected(){
            const connected = true;
            if (connected) { // connected
                this.$router.push("/payement");
            } else {
                this.$router.push("/connection");
            }
        }
    }   
}
</script>

<style scoped>
    .basket_product{
        display: grid;
        grid-template-columns: repeat(5,20%);
    }
</style>