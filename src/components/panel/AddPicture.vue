<template>
    <ul class="container_img">

    </ul>
    <button class="uk-button uk-button-secondary" v-on:click="generateInput()" type="button">Ajouter une photo</button>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            server_address:`${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`,
        }
    },
    methods: {
        deleteInputPicture(delete_index){
            this.pictures = this.pictures.filter((value,index)=>{
                if (delete_index !== index) {
                    return value;
                }
            })
        },
        generateInput(){
            let picture_info;
            const container = document.querySelector('.container_img');
                const list_element = document.createElement('li');
                    const input = document.createElement('input');
                    const button = document.createElement('button');

            (()=>{
                input.type="file"
                button.className= "uk-button uk-button-danger"
                button.type = "button"
                button.textContent = "delete"

                // Events
                input.addEventListener('change',()=>{
                    const formData = new FormData();
                    formData.append("image", input.files[0]);

                    axios.post(this.server_address+'/admin/addpicture', formData, {
                        headers: {
                        'Content-Type': 'multipart/form-data'
                        }
                    })             
                    .then(data=>{
                        picture_info=data.data;
                    })  
                    .catch(err=>{
                        console.error(err);
                    })    
                    
                })

                button.addEventListener('click',()=>{
                    if (picture_info) {
                        axios.post(this.server_address+'/admin/deletepicture', picture_info)             
                        .then(data=>{
                            console.log(data.data);
                        })  
                        .catch(err=>{
                            console.error(err);
                        })    
    
                        list_element.remove()
                    }
                })
            })();
            list_element.appendChild(input)
            list_element.appendChild(button)
                container.appendChild(list_element)
        }
    },
}
</script>

<style scoped>

</style>