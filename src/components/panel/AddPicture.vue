<template>
  <v-carousel v-model="model">
    <v-carousel-item
      v-for="(color) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-file-input
            accept="image/*"
            label="File input"
        ></v-file-input>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data() {
        return {
            model: 0,
                colors: [
                    'primary',
                    'secondary',
                    'yellow darken-2',
                    'red',
                    'orange',
                ],
        }
    },
    methods: {
        deleteInputPicture(index){
            console.log(index);
        }
    },
}
</script>

<style scoped>

</style>