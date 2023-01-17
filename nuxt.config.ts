// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@pinia/nuxt'
    ],
    typescript: {
        strict: true
    },
    app: {
        head: {
            title: 'Ecommerce Nuxt3 Playground',
            meta: [{
                name: 'description', content: 'playing around with nuxt 3'
            }],
            link: [{
                rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
            }]
        }
    }
});
