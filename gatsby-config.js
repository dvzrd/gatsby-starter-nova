"use-strict";

const { join } = require("path");

const config = require("./site.config");

module.exports = {
  plugins: [
    // plugins
    "gatsby-plugin-advanced-sitemap",
    "gatsby-plugin-next-seo",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: "#fff",
        display: "minimal-ui",
        icon: `${__dirname}/src/assets/images/logo-dark.png`,
        name: config.name,
        short_name: config.acronym,
        start_url: config.pathPrefix,
        theme_color: "#7b0ca6",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve(
            "./src/templates/default/DefaultTemplate.tsx"
          ),
        },
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-prismjs",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1280,
              maxHeight: 720,
              linkImagesToOriginal: false,
            },
          },
        ],
        remarkPlugins: [require("remark-slug"), require("remark-emoji")],
      },
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        canonical: config.siteUrl,
        description: config.description,
        openGraph: {
          description: config.description,
          images: [
            {
              url: `${config.siteUrl}/logo.png`,
              width: 800,
              height: 800,
              alt: config.name,
            },
          ],
          locale: "en_IE",
          site_name: config.name,
          title: config.title,
          type: "website",
          url: config.siteUrl,
        },
        twitter: {
          handle: `@${config.socialMedia.twitter}`,
          site: `@${config.socialMedia.twitter}`,
          cardType: "summary_large_image",
        },
        title: config.title,
        titleTemplate: `%s | ${config.name}`,
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
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
  ],
  siteMetadata: config,
};
