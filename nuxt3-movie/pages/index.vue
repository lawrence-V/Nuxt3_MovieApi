<template>
 <v-container>
     <v-text-field
      label="Movie "
      type="input"
      hint="Search a Movie"
      v-model="searchTerm"
    ></v-text-field>

    <v-row no-gutters>
      <v-col v-for="movie in data?.results" :key="movie" cols="12" lg="3" md="3" sm="4" class="mb-3 px-1">
               <MovieCard :movie="movie"  />
    
      </v-col>
    </v-row>

  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
 </v-container>



</template>

<script setup lang="ts">
import { ApiResponse } from "./../types/APIResponses";

const searchTerm = ref("");
const page = ref(1);

const disabledPrevious = computed(() => {
  return page.value === 1
})

const disabledNext = computed(() => {
  return page.value + 1 ===  data.value?.total_pages
})

const debouncedSearchTerm = refDebounced(searchTerm, 700);

const url = computed(() => {
  return `api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}`;
});

const { data } = await useFetch<ApiResponse>(url);
</script>

<style scoped>
</style>