<template>
    <form action="/connection" method="">
        <label>
            UserName
            <input type="text" placeholder="Username">
        </label>
        <label>
            Password
            <input type="password" placeholder="Password">
        </label>
        <input type="submit" value="connection">
    </form>
</template>

<script>
export default {
    data() {
        return {
            yes:process.env.VUE_APP_SERVER_HOST
        }
    },
    mounted() {
        `${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`
    },
}
</script>

<style scoped>

</style>