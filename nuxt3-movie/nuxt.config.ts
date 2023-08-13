// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },

   css: ['vuetify/styles/main.sass','@mdi/font/css/materialdesignicons.css'],

   build: {
    transpile: ["vuetify"]
   },

   runtimeConfig: {
    apiKey:process.env.NUXT_API_KEY,
    apiBaseUrl:process.env.NUXT_API_BASE_URL,
   }
  
})
