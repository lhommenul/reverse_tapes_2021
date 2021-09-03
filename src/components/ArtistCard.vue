<template>
    <li class="container_article_artist" :style="{height:height,width:width,'min-width':width}">
        <article class="container_info_event">
            <h3>Grand Veymont</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis consectetur assumenda perferendis repellendus, asperiores mollitia suscipit totam? Unde suscipit adipisci obcaecati quam, illo totam ad? Minima molestias aliquam eum?</p>
            <button>voir plus</button>
            <ul>
                <li>
                    <img src="" alt="facebook icon">
                </li>
                <li>
                    <img src="" alt="instagram icon">
                </li>
                <li>
                    <img src="" alt="youtube icon">
                </li>
            </ul>
        </article>
    </li>
</template>

<script>
export default {
    name:'ArtistCard',
    props:{
        height:String,
        width:String,
        data:Object,
    }
}
</script>

<style scoped>
    .container_article_artist{
        background-color: black;   
        max-width: 300px;
        margin-right: 1rem;
    }
        .container_info_event{
            height: 100%;
            width: 100%;
            text-align: center;
            display: grid;
            grid-template-rows: repeat(3,auto) 20%;
        }
</style>