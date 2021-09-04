<template>
    <li class="prog_card_container" :style="{height:height,width:width,'min-width':width,'grid-column':position}">
        <router-link :to="data.to">
            <img class="img_card" :src="data.img" alt="image">
        </router-link>
    </li>
</template>

<script>
export default {
    props:{
        height : String,
        width : String,
        data : Object,
        position:Number
    },
}
</script>

<style scoped>
  .prog_card_container{
      display: flex;
      justify-content: center;
  }
    .img_card{
        width: 100%;
    }
</style>