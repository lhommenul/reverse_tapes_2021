<template>
    <div>
        <h1>Add Programmation</h1>
        <form class="form_add_prog"> 
            <label>
                Name
                <input required type="text" name="name" max="45" placeholder="name">
            </label>

            <label>
                Description
                <input required type="text" name="description" placeholder="description">
            </label>

            <label>
                Location
                <input required type="text" name="location" placeholder="location">
            </label>

            <label>
                Event Start
                <input required type="date" placeholder="event_start">
            </label>
            <label>
                Event End
                <input required type="date" placeholder="event_end">
            </label>

            <label>
                Hour Start
                <input required type="datetime" name="hour_end" placeholder="hour_end">
            </label>
            <label>
                Hour End
                <input required type="datetime" name="hour_start" placeholder="hour_start">
            </label>            
            <div class="container_pictures">
                <AddPicture></AddPicture>
            </div>
            <button type="submit" v-on:click="addProgrammation">Ajouter Programmation</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import AddPicture from '@/components/panel/AddPicture'
export default {
    data() {
        return {
        }
    },
    components:{
        AddPicture
    },
    methods: {
        addProgrammation(ev){
            ev.preventDefault();
            const list_input_files = document.querySelectorAll('.container_pictures input');

            const addProgrammation = (list_id=[])=>{

                const form = document.querySelector('.form_add_prog');
                let f = new FormData(form);
                f.append("list_id",list_id)

                axios.post(this.$store.state.server_address+"/admin/addprogrammation",f)
                .then(data=>{
                    console.log(data);
                })
                .catch(err=>{
                    console.error(err);
                })
                                
            }


            if (list_input_files.length > 0) {      
                const formData = new FormData();

                list_input_files.forEach(input => {
                    formData.append("image", input.files[0]);                
                });

                axios.post(this.$store.state.server_address+'/admin/addpicture', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })             
                .then((data)=>{
                    addProgrammation(data.data);
                })  
                .catch(err=>{
                    console.error(err);
                })  

            }else{
                addProgrammation();
            }

        }
    },
}
</script>

<style scoped>

</style>