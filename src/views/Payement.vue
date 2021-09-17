<template>
    <section>
        <!-- USER INFORMATIONS -->
        <div>
            <h2>User Informations</h2>


            <!-- address -->
            <div>
                <label>
                    Selectionner 
                    <input type="checkbox">
                </label>

                <address>
                    
                </address>
            </div>
            <button>Ajoute une Adresse</button>
            <div></div>
        </div>
        <!-- ORDER INFORMATIONS -->
        <form method="POST" v-on:submit="payementRequest" :action="$store.state.server_address+'/pay/create-checkout-session'">
            <h2>Order Informations</h2>
            <button >Payer</button>
        </form>
    </section>
</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            user_info:{}
        }
    },
    mounted(){
        this.getUserInfo()
    },
    methods:{

        getUserInfo(){
            axios.post(this.$store.state.server_address+"/admin/getuser")
            .then(data=>{
                console.log(data);
                console.log("get user info payement");
            })
            .catch(err=>{
                console.error(err);
            })
        },
        payementRequest(ev){
            ev.preventDefault();
            
            axios.post(this.$store.state.server_address+'/pay/create-checkout-session',{

            })
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.error(err);
            })
        }
    }
}
</script>

<style scoped>
    
</style>