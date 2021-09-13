<template>
    <section class="container">
        <ul class="list_products">   
            <v-card
                elevation="2"
                shaped
                v-for="(product) in list_products" :key="product.id"
            >
                <v-card-title primary-title>
                    <h2>{{product.name}}</h2>
                    <p>{{product.description}}</p>
                </v-card-title>
                <v-card-text>
                    <v-btn color="primary">Modifier</v-btn>
                    <v-btn color="error" v-on:click="deleteProduct(product.id)">Supprimer</v-btn>
                </v-card-text>
            </v-card>
        </ul>
        <!-- ADD PRODUCT -->
        <form action="" v-on:submit="addProduct">
            <!-- Name -->
            <v-text-field
                label="Name"
                required 
                type="text" 
                v-model="form.name" 
                name="name" 
                placeholder="Nom du produit"
            ></v-text-field>            
            <!-- Type -->
            <v-text-field
                label="Type"
                required 
                type="number" 
                v-model="form.type" 
                name="type" 
                placeholder="type"
            ></v-text-field>
            <!-- Description -->
            <v-textarea
                solo
                label="Description"
                name="description" 
                v-model="form.description" 
                placeholder="description"
            ></v-textarea>                
            <!-- Color -->
            <v-text-field
                label="Color"
                required 
                type="text" 
                v-model="form.color" 
                name="color" 
                placeholder="rouge , vert"
            ></v-text-field>
            <!-- Type -->

            <v-select
                :items="items_haut"
                filled
                v-model="form.size"
                label="Haut"
            ></v-select>
            <v-select
                :items="items_bas"
                filled
                v-model="form.size"
                label="Bas"
            ></v-select>                
            <v-select
                :items="items_shose"
                filled
                v-model="form.size"
                label="Chaussures"
            ></v-select>      

            <!-- Come to get it -->
            <v-checkbox
                label="Come to get it"
                value="radio-1"
                v-model="form.come_to_get_it"
                name="come_to_get_it"
            ></v-checkbox>

            <!-- Type -->
            <v-text-field
                label="Prix HT"
                required 
                type="number" 
                v-model="form.price_ht" 
                name="price_ht" 
                placeholder="Prix hors taxes"
            ></v-text-field>                
            <v-text-field
                label="Prix TTC"
                required 
                type="number" 
                v-model="form.price_ttc" 
                name="price_ttc" 
                placeholder="Prix avec taxes"
            ></v-text-field>                                     
            <v-text-field
                label="Quantité"
                required 
                type="number" 
                v-model="form.quantity" 
                name="quantity" 
                placeholder="exemple : 50"
            ></v-text-field>                         
            <AddPicture></AddPicture>
            <v-btn
                elevation="2"
                color="primary"
            >
                Ajouter le produit
            </v-btn>                                                                   
        </form>
    </section>
</template>

<script>
import axios from 'axios';
import AddPicture from '@/components/panel/AddPicture'
export default {
    data() {
        return {
            items_haut: ['M', 'L', 'XL', 'XXL'],
            items_bas: ['30', '31', '32', '33', '34', '35','36', '37', '38', '39', '40', '41'],
            items_shose: ['M', 'L', 'XL', 'XXL'],
            form:{
                type:0,
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
    display: grid;
    grid-template-columns: 1fr;
}
@media screen and (min-width:48rem){
    
    form{
        grid-template-columns: repeat(2,1fr);
    }
}
</style>