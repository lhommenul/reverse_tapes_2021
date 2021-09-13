<template>
    <div>
        <ul class="list_products">    
            <li class="uk-card uk-card-default uk-card-body" v-for="(product) in list_products" :key="product.id">
                <h3 class="uk-card-title">{{product.name}}</h3>
                <p>{{product.description}}</p>
                <div>
                    <button class="uk-button uk-button-secondary">Modifier</button>
                    <button class="uk-button uk-button-danger" v-on:click="deleteProduct(product.id)">Supprimer</button>
                </div>
            </li>
        </ul>
        <form class="uk-search uk-search-default" v-on:submit="addProduct">
            <!-- Name
             -->
            <label>
                Name
                <input class="uk-search-input" required type="text" v-model="form.name" name="name" placeholder="Nom du produit">
            </label>
            <!-- Type -->
            <label>
                Type
                <input class="uk-search-input" required type="number" v-model="form.type" name="type" placeholder="type">
            </label>
            <!-- Description -->
            <label>
                Description
                <textarea class="uk-search-input" name="description" v-model="form.description" placeholder="description">

                </textarea>
            </label>
            <!-- Color -->
            <label>
                Color
                <input class="uk-search-input" required type="text" v-model="form.color" name="color" placeholder="color">
            </label>
            <!-- Type -->
            <label>
                Size
                <input class="uk-search-input" required type="number" v-model="form.size" name="size" placeholder="size">
            </label>    
            <!-- Come to get it -->
            <label>
                Come to get it
                <input class="uk-checkbox" type="checkbox" name="come_to_get_it" v-model="form.come_to_get_it">
            </label>    
            <!-- Type -->
            <label>
                Prix HT
                <input class="uk-search-input" required type="number" v-model="form.price_ht" name="price_ht" placeholder="Prix hors taxes">
            </label>    
             <label>
                Prix TTC
                <input class="uk-search-input" required type="number" v-model="form.price_ttc" name="price_ttc" placeholder="Prix avec taxes">
            </label>                              
            <label>
                Quantité
                <input class="uk-search-input" required type="number" v-model="form.quantity" name="quantity" placeholder="exemple : 50">
            </label>          
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
    

form{
    display: flex;
    flex-direction: column;
}
</style>