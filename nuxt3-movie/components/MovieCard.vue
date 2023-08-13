<template>
    <v-card
    style="background-color: rgb(232, 232, 232);"
    class="mx-auto"
    max-width="450"
  >
  <NuxtLink :to="`/movies/${movie?.id}`">
    <v-img
      :src="imgURL"
      height="400px"
      cover
    ></v-img>
   </NuxtLink>
    <v-card-title>
      {{movie?.title}}
    </v-card-title>

    <v-card-subtitle>
      {{movie?.overview}}
    </v-card-subtitle>

    <v-card-actions>
 <NuxtLink :to="`/movies/${movie?.id}`">
      <v-btn
     
        color="orange-lighten-2"
        variant="text"
      >
        Explore
      </v-btn>
</NuxtLink>
      <v-spacer></v-spacer>

   
    </v-card-actions>

  </v-card>
</template>

<script setup lang="ts">
import { PropType  }   from 'vue'
import { Movie } from './../types/Movie';


const props = defineProps({
    movie: {
        type: Object as PropType<Movie>,
         required: true
    }
})

const config = useRuntimeConfig();
const imgURL = computed(() => props.movie?.poster_path != null ? 
`${config.public.imgBaseUrl}/${props.movie.poster_path}` :
 'https://via.placeholder.com/300x500');


</script>

<style scoped>

</style>