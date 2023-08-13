<template>

    <div>
        <v-row no-gutters class="mt-3">
        <v-col cols="4">
        <v-card
    class="mx-auto"
    max-width="450"
  >
    <v-img
      :src="imgUrl"
      height="500px"
      cover
    ></v-img>

 

  </v-card>
        </v-col>


        <v-col cols="8">
        <v-card>

           <v-card-title class="text-h6">
      {{data?.title}}
    </v-card-title>


    <v-card-subtitle class="text-subtitle-1">
      {{data?.release_date }}
    </v-card-subtitle>
    
    <p class="text-start pa-5">{{data?.overview  }}</p>

        </v-card>
        
        </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
import { Movie } from 'types/Movie';

const route = useRoute();
const config = useRuntimeConfig();
const movieId = computed(( ) => route.params.id)

const {data} = await useFetch<Movie>(`/api/movies/${movieId.value}`)

const imgUrl = computed(() => data.value?.poster_path ?
 `${config.public.imgBaseUrl}/${data.value.poster_path}` :
 'https://via.placeholder.com/300x500'
 )
</script>

<style scoped>

</style>