// nuxt.config.js
export default defineNuxtConfig({
  // Global CSS
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Build configuration
  build: {
    // postcss: {
    //   postcssOptions: {
    //     plugins: {
    //       tailwindcss: {},
    //       autoprefixer: {},
    //     },
    //   },
    // },
  },

  // Modules
  modules: [],

  // Runtime configuration
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
    },
  },

  // Meta configuration for the app
  app: {
    head: {
      title: 'Nuxt Tailwind App',
      meta: [
        { name: 'description', content: 'A Nuxt 3 app with Tailwind CSS integration' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // Auto-import components
  components: true,

  compatibilityDate: '2024-12-27'
});