<template>
    <form v-on:submit="login" class="form_connection">
        <div :class="{message_pop:response.message}">
            {{response.message}}
        </div>
        <label>
            Name
            <input v-model="form.name" required name="name" type="text" placeholder="Doe">
        </label>
        <label>
            First Name
            <input v-model="form.first_name" required name="first_name" type="text" placeholder="Jhon">
        </label>
        <label>
            Email
            <input v-model="form.email" required name="email"  type="email" placeholder="example@site.com">
        </label>
        <label>
            Password
            <input v-model="form.password" required name="password" type="password" placeholder="Password">
        </label>
        <label>
            <router-link to="/connection">already got an account ?</router-link>
        </label>
        <input type="submit" value="Create Account">
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            response:{},
            form:{
                email:undefined,
                password:undefined,
                name:undefined,
                first_name:undefined
            }
        }
    },
    methods: {
        login(ev){
            
            this.response = {};

            ev.preventDefault();

            axios.post(
                this.$store.state.server_address+"/createaccount",
                this.form,
            )
            .then(data=>{
                this.response = data.data;
                console.log(document.cookie);
                this.$router.push('/?message="Connected"')
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