<template>
    <li :style="{height:height,width:width}">
        <img class="img_card" :src="server_address+data.thumbnail" alt="image">
        <button class="btn_type" >{{showType()}}</button>
        <div class="card_window" v-on:click="goTo">
            <h1>{{data.title}}</h1>
            <p>{{data.description}}</p>
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            server_address:`${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`,
        }
    },
    props:{
        height : String,
        width : String,
        data : Object,
    },
    mounted(){   
        // this.getPicture(this.data.thumbnail)
    },
    methods: {
        showType(){
            switch (this.data.type) {
                case 1:
                return "CD" 
                    
            
                default:
                    return "Undefined"
            }
        },
        goTo(){
            this.$router.push('/product?id='+this.data._id)
        }
    },
}
</script>

<style scoped>
    li{
        overflow: hidden;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        height: 100%;
        width: 100%;
    }
    li:hover .card_window,li:focus .card_window{
        height: 100%;
    }
    li:hover .btn_type,li:focus .btn_type{
        visibility: hidden;
    }
        .btn_type{
            padding: 0.4em;
            border-radius: 25px;
            border-style: none;
            margin-left: 1em;
            margin-top: 1em;
            justify-self: left;
            align-self: flex-start;
            z-index: 2;
            grid-column: 1;
            grid-row: 1;
            max-width:100%;
            background-color: rgba(0, 0, 0, 0.8);
            color: var(--text_white);
        }
        .img_card{
            z-index: 1;
            grid-column: 1;
            grid-row: 1;
            max-width:100%;;
        }
        .card_window{
            transition: 0.3s;
            display: flex;
            flex-direction: column;
            height: 0px;
            grid-column: 1;
            grid-row: 1;
            z-index: 2;
            background-color: rgba(0, 0, 0, 0.4);
            overflow: hidden;
        }
</style>