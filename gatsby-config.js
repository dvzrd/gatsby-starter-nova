const { join } = require("path");

const { manifest, metaData, socialMedia } = require("./site.config");

module.exports = {
  plugins: [
    // plugins
    "gatsby-plugin-advanced-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: `${__dirname}/src/assets/images/logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("cssnano")({
            preset: "default",
          }),
          require("postcss-import"),
          require("postcss-preset-env")({
            stage: 1,
          }),
          require("tailwindcss"),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: manifest,
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: join(__dirname, "src/components"),
        containers: join(__dirname, "src/containers"),
        contexts: join(__dirname, "src/contexts"),
        graphql: join(__dirname, "src/graphql"),
        images: join(__dirname, "src/images"),
        layouts: join(__dirname, "src/layouts"),
        pages: join(__dirname, "src/pages"),
        src: join(__dirname, "src"),
        styles: join(__dirname, "src/assets/styles"),
        templates: join(__dirname, "src/templates"),
        types: join(__dirname, "src/types"),
        utils: join(__dirname, "src/utils"),
      },
    },
    // sources
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    // themes
    // - add gatsby themes here.
    // transformers
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
  ],
  siteMetadata: {
    ...metaData,
    socialMedia,
  },
};
