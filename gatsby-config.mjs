// const { manifest, metaData } = require("./site.config.mjs");

import { manifest, metaData } from "./site.config.mjs";

module.exports = {
  plugins: [
    "gatsby-plugin-advanced-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
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
    "gatsby-theme-tailwind",
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
  ],
  siteMetadata: metaData,
};
