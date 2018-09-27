module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "rubenbielen-frontend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Portfolio frontend project"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: ["@/assets/scss/global.scss"],

  /*
  ** Customize the progress bar color
  */
  loading: { color: "#98FB98" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },

  plugins: ['~/plugins/directives'],

  modules: ['nuxt-imagemin']
};
