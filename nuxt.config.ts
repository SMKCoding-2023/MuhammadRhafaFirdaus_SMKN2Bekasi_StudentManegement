// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt'],

  pwa:{
    manifest: {
    "name": "Student Manegement System",
    "short_name": "SMS",
    "theme_color": "#eeeeee",
    "background_color": "#eeeeee",
    "display": "standalone",
    "orientation": "portrait",
    "scope": "/",
    "start_url": "/",
    icons:[
      {
        "sizes":"144x144",
        "src":"images/icons/icon.png",
        "type":"image/png"},
      ]
      
      },
      devOptions:{
        enabled: true,
    }
  },

  app: {
    head: {
      title: "Student Manegement",
      link: [
        { rel: "stylesheet", href:"https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }
        ],
      }
    },
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
  },

  

  tailwindcss:{
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },

 
  
  

  generate: {
    fallback: true
  },

})