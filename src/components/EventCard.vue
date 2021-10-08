<template>
    <li class="prog_card_container">
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
        width: 100%;
    }
</style>