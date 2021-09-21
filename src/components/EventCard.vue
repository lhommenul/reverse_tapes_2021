<template>
    <li class="prog_card_container" :style="{'grid-column':position}">
        <router-link :to="'/event?id='+data._id">
            <img class="img_card" :src="$store.state.server_address+data?.thumbnail_large?.[0]" alt="image">
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
        max-height: 100%;
    }
</style>