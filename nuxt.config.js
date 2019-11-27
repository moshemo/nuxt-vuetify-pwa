import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",

  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: { color: "#fff" },

  css: [],

  plugins: [],

  buildModules: ["@nuxtjs/vuetify"],

  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],

  axios: {},

  pwa: {
    icon: {
      sizes: [48, 64, 96, 120, 144, 152, 192, 256, 384, 512]
    },
    manifest: {
      background_color: "#405887",
      description: "All your fastener needs, in one place",
      dir: "ltr",
      display: "standalone",
      lang: "en-US",
      name: "Blue-Jay Fasteners",
      orientation: "any",
      scope: "/",
      short_name: "BlueJay",
      start_url: "/",
      theme_color: "#405887"
    }
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
