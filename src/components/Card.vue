<template>
    <li class="card_img">
        <span class="uk-badge">{{showType()}}</span>
        <div class="uk-inline">
            <router-link :to="'/product?id='+this.data._id">
                <img :src="server_address+data.thumbnail" alt="image">
                <div class="overlay uk-overlay uk-overlay-primary uk-position-bottom">
                    <h1>{{data.title}}</h1>
                    <p>{{data.description}}</p> 
                </div>                
            </router-link>
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
                    return "Inconnu"
            }
        },
    },
}
</script>

<style scoped>
.card_img{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    overflow: hidden;
}
    .uk-inline{
        grid-column: 1;
        grid-row: 1;
        overflow: hidden;
    }
    .uk-inline:focus-within .overlay, .uk-inline:hover .overlay{
        transition: 0.3s;
        transform: translateY(0);
    }
    .card_img:focus-within .uk-badge, .card_img:hover .uk-badge{
        transform: translateY(-200%);
    }
        .overlay{
            flex-wrap: wrap;
            transform: translateY(100%);
        }
    .uk-badge{
        transition: 0.3s;
        margin-top: 0.6rem;
        margin-left: 0.6rem;
        z-index: 100;
        grid-column: 1;
        grid-row: 1;
        justify-self: flex-start;
        /* position: relative;
        transform: translate(-30px,30px) */
    }
</style>