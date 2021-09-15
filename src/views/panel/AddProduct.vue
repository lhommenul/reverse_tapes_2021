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
        <form class="uk-search uk-search-default form_data_product" v-on:submit="addProduct">
            <!-- Name
             -->
            <label class="uk-align-center">
                Name
                <input class="uk-search-input" required type="text" name="name" placeholder="Nom du produit">
            </label>            
            <!-- Description -->
            <label class="uk-align-center">
                Description
                <textarea class="uk-search-input" name="description" placeholder="description">

                </textarea>
            </label>  
            <!-- Price -->
            <label class="uk-align-center">
                Prix HT
                <input class="uk-search-input" required type="number" name="price_ht" placeholder="Prix hors taxes">
            </label>    
             <label class="uk-align-center">
                Prix TTC
                <input class="uk-search-input" required type="number" name="price_ttc" placeholder="Prix avec taxes">
            </label>        
             <!--  Quantité  -->
            <label class="uk-align-center">
                Quantité
                <input class="uk-search-input" required type="number" name="quantity" placeholder="exemple : 50">
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
            <div class="uk-align-center" v-if="(type_selected >= 1) && (type_selected <= 3)"> 
                <label class="uk-align-center">
                    BandCamp Url
                    <input class="uk-search-input" type="text" name="bandcamp" placeholder="https://stuffedfoxes.bandcamp.com/album/no-vacancy">
                </label>        
            </div>
            

            <div class="uk-align-center" v-if="(type_selected >= 2) && (type_selected <= 6)">
                <!-- Color -->
                <label class="uk-align-center">
                    Color
                    <input class="uk-search-input" required type="text" name="color" placeholder="color">
                </label>
                <!-- Come to get it -->
                <label class="uk-align-center">
                    Come to get it
                    <input class="uk-checkbox" type="checkbox" name="come_to_get_it">
                </label>  
                <!-- Size -->
                <label v-if="(type_selected >= 4) && (type_selected <= 6)"> 
                    Size
                    <input class="uk-search-input" required type="number" name="size" placeholder="size">
                </label>                    
            </div>
            <div class="container_thumbnail">
                <AddPicture
                    input_name="thumbnail"
                    btn_name="AJOUTER UNE THUMBNAIL"
                ></AddPicture>
            </div>            
            <div class="container_pictures">
                <AddPicture></AddPicture>
            </div>
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
            type_selected:undefined,
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
            console.log("requested");

            ev.preventDefault();

            const form_product = document.querySelector('.form_data_product');

            const formData = new FormData(form_product);

            axios.post(
                this.server_address+"/admin/addproduct",
                formData,
                {
                      headers: { "Content-Type": "multipart/form-data" },
                }
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
                console.log(data.data);
                this.list_products = data.data;
            })
            .catch(err=>{
                console.log(err);
            })
        },
        setType(ev){
            this.type_selected = parseInt(ev.target.value)
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