<template>
    <section  class="uk-container">
    <div>
        <div>
            <h2>Liste des groupes</h2>
            <div v-for="(band, index) in bands" :key="index" class="uk-card uk-card-default uk-card-body">
                <h3 class="uk-card-title">{{band.name}}</h3>
                <button class="uk-button uk-button-danger">Supprimer</button>    
                <button class="uk-button uk-button-secondary">Modifier</button>    
            </div>
        </div>
        <section class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title">Ajouter un groupe</h3>
            <form>
                <fieldset class="uk-fieldset">

                    <label class="uk-margin">
                        Nom du Groupe
                        <input class="uk-input" v-model="form.name" type="text" placeholder="Exemple : Stuffed Foxes">
                    </label>
                    <label class="uk-margin">
                        Description
                        <input class="uk-input" v-model="form.description" type="text" placeholder="Je vie ....">
                    </label>
                    <div class="uk-margin">
                        <AddPicture></AddPicture>
                    </div>

                </fieldset>
            </form>
            <button class="uk-button uk-button-primary" v-on:click="addBand">Ajouter</button>
        </section>
    </div>
    </section>
</template>

<script>
import axios from 'axios';
import AddPicture from '@/components/panel/AddPicture'
export default {
    data() {
        return {
            form:{},
            bands:[],
            server_address:`${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`,
        }
    },
    mounted() {
        this.getBands()
    },
    components:{
        AddPicture
    },
    methods: {
        getBands(){
            axios.get(this.server_address+"/getband")
            .then(data=>{
                this.bands = data.data;
            })
            .catch(err=>{
                console.error(err);
            })
        },
        addBand(){
            axios.post(this.server_address+"/admin/addband",this.form)
            .then(data=>{
                console.log(data);
                this.getBands()
            })
            .catch(err=>{
                console.error(err);
            })
        },
        deleteBand(){

        },
        modifyBand(){

        },
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