<template>
    <section  class="uk-container">
    <div>
        <div>
            <h2>Liste des groupes</h2>
            <div v-for="(band, index) in bands" :key="index" class="uk-card uk-card-default uk-card-body">
                <h3 class="uk-card-title">{{band.name}}</h3>
                <button class="uk-button uk-button-danger" v-on:click="deleteBand(band)">Supprimer</button>    
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
                    <div class="uk-margin pictures_container">
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
            axios.get(this.$store.state.server_address+"/getband")
            .then(data=>{
                this.bands = data.data;
            })
            .catch(err=>{
                console.error(err);
            })
        },
        addBand(){
            const container = document.querySelector('.pictures_container');
            const list_input_files = container.querySelectorAll('input');

            const addband = (list_id=[])=>{

                let copy = this.form;
                copy.list_id = list_id;
                
                axios.post(this.$store.state.server_address+"/admin/addband",copy)
                .then(data=>{
                    console.log(data);
                    this.getBands()
                })
                .catch(err=>{
                    console.error(err);
                })                
            }

            if (list_input_files.length > 0) {      
                const formData = new FormData();

                list_input_files.forEach(input => {
                    formData.append("image", input.files[0]);                
                });

                axios.post(this.$store.state.server_address+'/admin/addpicture', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })             
                .then((data)=>{
                    addband(data.data);
                })  
                .catch(err=>{
                    console.error(err);
                })  

            }else{
                addband();
            }
        },
        deleteBand({id}){
            axios.post(this.$store.state.server_address+"/admin/deleteband",{id:id})
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.error(err);
            })
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