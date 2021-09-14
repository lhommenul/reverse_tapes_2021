<template>
    <div>
        <ul class="list_products">    
            <li class="uk-card uk-card-default uk-card-body" v-for="(product,index) in list_products" :key="product.id">
                <h3 class="uk-card-title">{{product.name}}</h3>
                <p>{{product.description}}</p>
                {{index}}
                <div>
                    <button class="uk-button uk-button-secondary">Modifier</button>
                    <button class="uk-button uk-button-danger" v-on:click="deleteProduct(product.id)">Supprimer</button>
                </div>
            </li>
        </ul>
        <form class="uk-search uk-search-default " v-on:submit="addProduct">
            <!-- Name
             -->
            <label class="uk-align-center">
                Name
                <input class="uk-search-input" required type="text" v-model="form.name" name="name" placeholder="Nom du produit">
            </label>            
            <!-- Description -->
            <label class="uk-align-center">
                Description
                <textarea class="uk-search-input" name="description" v-model="form.description" placeholder="description">

                </textarea>
            </label>  
            <!-- Price -->
            <label class="uk-align-center">
                Prix HT
                <input class="uk-search-input" required type="number" v-model="form.price_ht" name="price_ht" placeholder="Prix hors taxes">
            </label>    
             <label class="uk-align-center">
                Prix TTC
                <input class="uk-search-input" required type="number" v-model="form.price_ttc" name="price_ttc" placeholder="Prix avec taxes">
            </label>        
             <!--  Quantité  -->
            <label class="uk-align-center">
                Quantité
                <input class="uk-search-input" required type="number" v-model="form.quantity" name="quantity" placeholder="exemple : 50">
            </label>                               
            <!-- Type -->
            <label class="uk-align-center">
                Type
                <select class="uk-select" required v-on:change="setType">
                    <option value="1">Dematérialisé</option>
                    <option value="2">Vinyle</option>
                    <option value="3">Cd</option>
                    <option value="4">Chaussure</option>
                    <option value="5">Haut</option>
                    <option value="6">Bas</option>
                </select>    
            </label>
            <div class="uk-align-center" v-if="(form.type >= 1) && (form.type <= 3)"> 
                <label class="uk-align-center">
                    BandCamp Url
                    <input class="uk-search-input" type="text" v-model="form.bandcamp" name="bandcamp" placeholder="https://stuffedfoxes.bandcamp.com/album/no-vacancy">
                </label>        
            </div>
            

            <div class="uk-align-center" v-if="(form.type >= 2) && (form.type <= 6)">
                <!-- Color -->
                <label class="uk-align-center">
                    Color
                    <input class="uk-search-input" required type="text" v-model="form.color" name="color" placeholder="color">
                </label>
                <!-- Come to get it -->
                <label class="uk-align-center">
                    Come to get it
                    <input class="uk-checkbox" type="checkbox" name="come_to_get_it" v-model="form.come_to_get_it">
                </label>  
                <!-- Size -->
                <label v-if="(form.type >= 4) && (form.type <= 6)"> 
                    Size
                    <input class="uk-search-input" required type="number" v-model="form.size" name="size" placeholder="size">
                </label>                    
            </div>
            <AddPicture></AddPicture>
            <button class="uk-button uk-button-primary">Ajouter le produit</button>                                                                         
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import AddPicture from '@/components/panel/AddPicture'
export default {
    data() {
        return {
            form:{
                type:undefined,
                description:undefined,
                color:undefined,
                size:undefined,
                come_to_get_it:false,
                price_ht:undefined,
                price_ttc:undefined,
                quantity:undefined,
            },
            list_products:[],
            server_address:`${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`,
        }
    },
    components:{
        AddPicture
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        addProduct(ev){
            ev.preventDefault();
            axios.post(
                this.server_address,
                this.form
            )
            .then(data=>{
               console.log(data.data);
            })
            .catch(err=>{
                console.log(err);
            })
        },
        getProducts(){
            axios.get(
                this.server_address+"/getproduct",
            )
            .then(data=>{
                this.list_products = data.data;
                console.log(data.data);
            })
            .catch(err=>{
                console.log(err);
            })
        },
        // DELETE
        deleteProduct(product_id){
            axios.post(
                this.server_address+"/admin/deleteproduct",
                {id:product_id}
            )
            .then(data=>{
               console.log(data.data);
               this.getProducts()
            })
            .catch(err=>{
                console.log(err);
            })
        },
        setType(ev){
            this.form.type = parseInt(ev.target.value)
        }
    },
}
</script>

<style scoped>
/* LIST ELEMENTS */
.list_products{
    display: flex;
    flex-direction: column;
}
    .product{
        margin: 1rem;
        padding: 1rem;
        box-shadow: 3px 3px 6px grey;
        place-self: center;
    }
    .uk-search-default{
        width: auto;
    }

form{
    display: flex;
    flex-direction: column;
}
</style>