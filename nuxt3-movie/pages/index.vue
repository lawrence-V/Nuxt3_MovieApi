<template>
  <div>
    <v-text-field
      label="Movie "
      type="input"
      hint="Enter your password to access this website"
      v-model="searchTerm"
    ></v-text-field>

    <v-row no-gutters>
      <v-col v-for="movie in data?.results" :key="movie" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2"> {{ movie.title }}</v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ApiResponse } from "./../types/APIResponses";

const searchTerm = ref("");

const url = computed(() => {
  return `api/movies/search?query=${searchTerm.value}`;
});

const { data } = await useFetch<ApiResponse>(url);
</script>

<style scoped>
</style>