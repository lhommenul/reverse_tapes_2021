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
    </section>
</template>


<script>
// import axios from 'axios'
export default {
    data() {
        return {
            user_info:{}
        }
    },
    mounted(){
        // this.getUserInfo()
    },
    methods:{

        // getUserInfo(){
        //     axios.post(this.$store.state.server_address+"/admin/getinfo")
        //     .then(data=>{
        //         console.log(data.data);
        //     })
        //     .catch(err=>{
        //         console.error(err);
        //     })
        // }
    }
}
</script>

<style scoped>
    
</style>