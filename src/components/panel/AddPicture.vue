<template>
    <ul class="container_img">

    </ul>
    <button class="uk-button uk-button-secondary" v-on:click="generateInput()" type="button">{{btn_name??"Ajouter une photo"}}</button>
</template>

<script>
export default {
    data() {
        return {
            server_address:`${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`,
        }
    },
    props:{
        input_name:String,
        btn_name:String,
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
            const container = document.querySelector('.container_img');
                const list_element = document.createElement('li');
                    const input = document.createElement('input');
                    const button = document.createElement('button');

            (()=>{
                input.type="file"
                input.name = this.input_name??"picture"

                button.className= "uk-button uk-button-danger"
                button.type = "button"
                button.textContent = "delete"

                // Events
                button.addEventListener('click',()=>{
                    list_element.remove()
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