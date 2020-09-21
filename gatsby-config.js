const { manifest, metaData } = require("./site.config");

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
        logo: `${__dirname}/data/assets/logo.png`,
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
          require("tailwindcss"),
          require("autoprefixer"),
          require("cssnano")({
            preset: "default",
          }),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: manifest,
    },
    // sources
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data`,
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
  siteMetadata: metaData,
};
