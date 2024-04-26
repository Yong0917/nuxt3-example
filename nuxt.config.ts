// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxt/image", '@pinia/nuxt', 'nuxt-lodash', '@nuxtjs/tailwindcss'],
    srcDir: 'src/',
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
    // components: {
    //     global: true,
    //     dirs: ['~/components/display/template',
    //         '~/components/display/corner']
    // },
})