<template>
    <ul>
        <li v-for="(picture, index) in pictures" :key="index">
            <input type="file">
            <button v-on:click="deleteInputPicture(index)" type="button">delete</button>
            {{index}}
        </li>
    </ul>
    <button v-on:click="pictures.push({})" type="button">Ajouter une photo</button>
</template>

<script>
export default {
    data() {
        return {
            pictures:[
                
            ]
        }
    },
    methods: {
        deleteInputPicture(index){
            console.log(index);
        }
    },
}
</script>

<style scoped>

</style>