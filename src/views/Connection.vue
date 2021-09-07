<template>
    <form :action="server_address+'/connection'" method="POST">
        <label>
            Email
            <input name="email" type="email" placeholder="Username">
        </label>
        <label>
            Password
            <input name="password" type="password" placeholder="Password">
        </label>
        <label>
            <router-link to="/createaccount">create account</router-link>
        </label>
        <input type="submit" value="connection">
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            server_address:`${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`
        }
    },
    methods: {
        login(ev){
            ev.preventDefault();
            axios({
                method:"POST",
                url:this.server_address+"/connection",
                params:{

                }
            })
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
}
</script>

<style scoped>

</style>