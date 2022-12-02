export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ssr',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        hid: 'gtmHead',
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8JKG8R');`
      }
    ],
    noscript: [
      {
        // NOTE: This code parsed as string in HTML when the browser can use Javascript.
        // If you disble Javascirpt then check the page, this code parsed as tag!
        hid: 'gtmBody',
        innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T8JKG8R"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        body: true
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'gtmHead': ['innerHTML'],
      'gtmBody': ['innerHTML']
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
