<template>
    <section>
        <ul>
            <li v-for="(item,index) in $store.state.basket.products" :key="index">
                {{item.id}}
                {{item.name}}
                {{item.quantity}}
                {{item.thumbnail}}
                {{item.size}}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>