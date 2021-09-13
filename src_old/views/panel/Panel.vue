<template>
    <section>
        <PanelMenu></PanelMenu>
        <router-view></router-view>
    </section>
</template>

<script>
import PanelMenu from '@/components/panel/PanelMenu'
export default {
    components:{
        PanelMenu
    }
}
</script>

<style>
.btn_modify{
    background-color: green;
    padding: 0.3rem;
}
.btn_delete{
    background-color: red;
    padding: 0.3rem;
}
</style>