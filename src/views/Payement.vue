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
        <button v-on:click="setUpdatePayment">Payer</button>
        <div id="payement_container">

        </div>
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
        setUpdatePayment(){
            axios.get(this.$store.state.server_address+"/pay/buy")
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err);
            })
            // const baseOrderAmount = '15.00';
            // loadScript({ "client-id": "test" })
            // .then((paypal) => {
            //     paypal.Buttons({
            //         onShippingChange: function(data, actions) {
            //             // Reject non-US addresses
            //             if (data.shipping_address.country_code !== 'FR') {
            //             return actions.reject();
            //             }

            //             // Patch the shipping amount
            //             const shippingAmount = data.shipping_address.state === 'CA' ? '0.00' : '5.00';
            //             return actions.order.patch([
            //             {
            //                 op: 'replace',
            //                 path: '/purchase_units/@reference_id==\'default\'/amount',
            //                 value: {
            //                     currency_code: 'EUR',
            //                     value: (parseFloat(baseOrderAmount) + parseFloat(shippingAmount)).toFixed(2),
            //                     breakdown: {
            //                         item_total: {
            //                         currency_code: 'EUR',
            //                         value: baseOrderAmount
            //                         },
            //                         shipping: {
            //                         currency_code: 'EUR',
            //                         value: shippingAmount
            //                         }
            //                     }
            //                 }
            //             }
            //             ]);
            //         }
            //         }
            //     ).render("#payement_container");
            // })
            // .catch((err) => {
            //     console.error("failed to load the PayPal JS SDK script", err);
            // });
        }

    }
}
</script>

<style scoped>
    
</style>