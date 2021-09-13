<template>
    <div>
        <ul class="list_products">    
            <li class="product" v-for="(product) in list_products" :key="product.id">
                <h2>{{product.name}}</h2>
                <p>{{product.description}}</p>
                <button class="btn_modify">Modifier</button>
                <button class="btn_delete" v-on:click="deleteProduct(product.id)">Supprimer</button>
            </li>
            
        </ul>
        <!-- ADD PRODUCT -->
        <form class="center content-inputs" action="" v-on:submit="addProduct">
            <!-- Name
             -->
            <label>
                Name
                <input required type="text" v-model="form.name" name="name" placeholder="Nom du produit">
            </label>
            <!-- Type -->
            <label>
                Type
                 <vs-input
                    required
                    type="number"
                    label="Name"
                    v-model="form.type"
                    name="type"
                    placeholder="type"
                />
                <!-- <input required type="number" v-model="form.type" name="type" placeholder="type"> -->
            </label>
            <!-- Description -->
            <label>
                Description
                <textarea name="description" v-model="form.description" placeholder="description">

                </textarea>
            </label>
            <!-- Color -->
            <label>
                Color
                <input required type="text" v-model="form.color" name="color" placeholder="color">
            </label>
            <!-- Type -->
            <label>
                Size
                <input required type="number" v-model="form.size" name="size" placeholder="size">
            </label>    
            <!-- Come to get it -->
            <label>
                Come to get it
                <input type="checkbox" v-model="form.come_to_get_it" name="come_to_get_it">
            </label>    
            <!-- Type -->
            <label>
                Prix HT
                <input required type="number" v-model="form.price_ht" name="price_ht" placeholder="Prix hors taxes">
            </label>    
             <label>
                Prix TTC
                <input required type="number" v-model="form.price_ttc" name="price_ttc" placeholder="Prix avec taxes">
            </label>                              
            <label>
                Quantité
                <input required type="number" v-model="form.quantity" name="quantity" placeholder="exemple : 50">
            </label>          
            <AddPicture></AddPicture>
            <button>Ajouter le produit</button>                                                                         
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
    display: flex;
    flex-direction: column;
}
</style>