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
        <div>
            <h2>Order Informations</h2>
        </div>
        <div id="smart-button-container">
            <div style="text-align: center;">
                <div id="paypal-button-container"></div>
            </div>
        </div>
        <button>Payer</button>
        <div id="payement_container">

        </div>
    </section>
</template>


<script>
// import axios from 'axios'
import { loadScript } from "@paypal/paypal-js";
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
        
        },
        setUpdatePayment(){
            loadScript({ "client-id": "test" })
            .then((paypal) => {
                paypal.Buttons().render("#payement_container");
            })
            .catch((err) => {
                console.error("failed to load the PayPal JS SDK script", err);
            });
        }

    }
}
</script>

<style scoped>
    
</style>