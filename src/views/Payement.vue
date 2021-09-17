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
        <form method="POST" :action="$store.state.server_address+'/pay/create-checkout-session'">
            <div>
            <h2>Order Informations</h2>
            </div>

            <button v-on:click="setUpdatePayment">Payer</button>
            <div id="payement_container">

            </div>
        </form>
    </section>
</template>


<script>
import axios from 'axios'
// import { loadScript } from "@paypal/paypal-js";
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
    }
}
</script>

<style scoped>
    
</style>