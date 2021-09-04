<template>
    <li class="container_article_artist" :style="{height:height,width:width,'min-width':width}">
        <article class="container_info_event">
            <h3 class="spacer">Grand Veymont</h3>
            <p class="spacer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis consectetur assumenda perferendis repellendus, asperiores mollitia suscipit totam? Unde suscipit adipisci obcaecati quam, illo totam ad? Minima molestias aliquam eum?</p>
            <button class="spacer">voir plus</button>
            <ul class="spacer list_socials">
                <li>
                    <img class="icon_social" src="@/assets/facebook.png" alt="facebook icon">
                </li>
                <li>
                    <img class="icon_social" src="@/assets/instagram.png" alt="instagram icon">
                </li>
                <li>
                    <img class="icon_social" src="@/assets/youtube.png" alt="youtube icon">
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
        .spacer{
            margin: 1rem;
        }
        .container_info_event{
            height: 100%;
            width: 100%;
            text-align: center;
            display: grid;
            grid-template-rows: repeat(3,auto) 20%;
        }
            .list_socials{
                padding: 0rem 1.5rem;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
                .icon_social{
                    height: 30px;
                    width: 30px;
                }
</style>