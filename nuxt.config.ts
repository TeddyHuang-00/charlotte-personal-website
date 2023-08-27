// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/nhuang1/",
    pageTransition: { name: "page" },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@vueuse/motion/nuxt",
  ],
});
