<template>
    <section class="container">

        <h2 v-if="$store.state.basket.products.length <= 0">Pas de Produits dans le Panier</h2>

        <table class="talble_container_products" v-else>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Size</th>
                </tr>
            </thead>
            <tbody>
                <tr class="container_product_detail" v-for="(item,index) in $store.state.basket.products" :key="index">
                    <td><img class="img_product" :src="$store.state.server_address+item.thumbnail" alt="basket picture"></td>
                    <td><p>{{item.name}}</p></td>
                    <td><input class="uk-input" type="number" v-on:change="changeQuantity(item)" min="1" v-model="item.quantity"></td>
                    <td><p>{{item.size==="undefined"?"":item.size}}</p></td>
                    <button v-on:click="deleteProduct(item.id)">X</button>
                </tr>
            </tbody>
        </table>      
        <button v-on:click="checkIfConnected">Passer au payement</button>  
    </section>
</template>

<script>
import axios from 'axios'
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
        },
        changeQuantity(ev){
            if (!ev.quantity || ev.quantity <= 0) { //quantity undefined
                ev.quantity = 1;
                this.$store.commit("modifyQuantityProduct",ev)
            }else{ // check if the quantity is available
                // check the quantity product
                axios.get(this.$store.state.server_address+"/getproduct?id="+ev.id)
                .then(data=>{
                    if (ev.quantity > data.data.quantity) {
                        console.error("quantité disponnible inferieure a la demande");
                        // display error message and set the value at the max 
                        ev.quantity = data.data.quantity;
                    } else {
                        this.$store.commit("modifyQuantityProduct",ev)
                        console.log("all good");
                    }
                })
                .catch(err=>{
                    console.error(err);
                })
            }
        }
    }   
}
</script>

<style scoped>
    .basket_product{
        
    }
        .container_product_detail{
            
        }
            .img_product{
                max-height: 7rem;
            }
</style>