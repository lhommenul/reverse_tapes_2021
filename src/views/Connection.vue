<template>
    <form v-on:submit="login" class="form_connection">
        <div :class="{message_pop:response.message}">
            {{response.message}}
        </div>
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
            server_address:`${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`,
            response:{}
        }
    },
    methods: {
        login(ev){
            this.response = {};
            ev.preventDefault();
            axios({
                method:"POST",
                url:this.server_address+"/connection",
                params:{

                }
            })
            .then(data=>{
                this.response = data.data;
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
}
</script>

<style scoped>
input::placeholder{
    font-size: 1rem;
}
a{
    color: var(--text_white);
}
input{
    border-radius: 2rem;
    text-indent: 0.4rem;
    font-size: 1rem;
    border-style: none;
    padding: 0.5rem;
}
    .form_connection, label{
        place-self: center;
        display: flex;
        flex-direction: column;
    }
    .message_pop{
        background-color: red;
        padding: 1rem;
        place-self: center;
        border-radius: 1rem;
    }
</style>