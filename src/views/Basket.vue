<template>
    <section class="container uk-container">

        <h2 v-if="$store.state.basket.products.length <= 0">Pas de Produits dans le Panier</h2>
        <form class="form_products_client" v-else method="POST" v-on:submit="payementRequest" :action="$store.state.server_address+'/pay/create-checkout-session'">
            <ul class="list_options" uk-accordion="multiple: false">
                <li v-show="steps >= 0" class="uk-open product_list"> <!-- List Products -->
                    <a class="uk-accordion-title" href="#">Liste des Produits</a>
                    <div class="uk-accordion-content">
                        <table class="talble_container_products">
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
                        <button class="uk-button uk-button-primary" type="button" v-on:click="validStep">Valider les Produits</button>
                    </div>
                </li>
                <li v-show="steps === 1" class="address_container"> <!-- Address Option -->
                    <a class="uk-accordion-title" href="#">Récapitulatif</a>
                    <div class="uk-accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button class="uk-button uk-button-primary">Passer au Payement</button>
                    </div>
                </li>
            </ul>
        </form>
    </section>
</template>

<script>
import axios from 'axios'
import UIkit from 'uikit';
export default {
    data() {
        return {
            steps:0,
            user_info:{}
        }
    },
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
        getUserInfo(){
            axios.post(this.$store.state.server_address+"/admin/getuser",

            )
            .then(data=>{
                console.log(data);
                console.log("get user info payement");
            })
            .catch(err=>{
                console.error(err);
            })
        },
        payementRequest(ev){
            ev.preventDefault();
        
            axios.post(this.$store.state.server_address+'/pay/create-checkout-session',this.$store.state.basket.products)
            .then(response=>{ // if the data is ok
                window.location.href = response.data;
            })
            .catch(err=>{
                console.error(err);
            })
 
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
        },
        validStep(){
            switch (this.steps) {
                case 0:
                    console.log("product valid");
                    this.steps = 1;
                    UIkit.accordion('.list_options').toggle(1, true)
                    break;           
                default:
                    this.steps = 0;
                    UIkit.accordion('.list_options').toggle(0, true)
                    break;
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