// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['nuxt-quasar-ui', "@nuxt/image", '@pinia/nuxt', 'nuxt-lodash', '@nuxtjs/tailwindcss'],
    quasar: { /* */},
    srcDir: 'src/',
    // components: {
    //     global: true,
    //     dirs: ['~/components/display/template',
    //         '~/components/display/corner']
    // },
})