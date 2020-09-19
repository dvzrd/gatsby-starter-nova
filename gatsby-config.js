const { manifest, metaData } = require("./site.config");

module.exports = {
  plugins: [
    "gatsby-plugin-advanced-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
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
      resolve: "gatsby-plugin-manifest",
      options: manifest,
    },
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
  ],
  siteMetadata: metaData,
};
