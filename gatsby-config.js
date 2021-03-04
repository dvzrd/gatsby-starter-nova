"use-strict";

const { join } = require("path");

const config = require("./site.config");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: false,
    FAST_REFRESH: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    // plugins
    "gatsby-plugin-offline",
    "gatsby-plugin-optimize-svgs",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
      },
    },
    {
      resolve: "gatsby-plugin-advanced-sitemap",
      options: {
        exclude: ["/dev-404-page", "/404", "/404.html", /(\/)?hash-\S*/],
        createLinkInHead: true,
        addUncaughtPages: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: "#fff",
        display: "minimal-ui",
        icon: `${__dirname}/assets/media/logo-dark.png`,
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
              linkImagesToOriginal: false,
            },
          },
        ],
        remarkPlugins: [require("remark-emoji")],
      },
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        canonical: config.siteUrl,
        description: config.description,
        htmlAttributes: {
          prefix: "og: https://ogp.me/ns#",
        },
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
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true,
        tailwind: true,
      },
    },
    // TODO:
    // - This seems like a maintenance nightmare.
    // - Replace this with a typescript config for root import.
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: join(__dirname, "src/components"),
        containers: join(__dirname, "src/containers"),
        contexts: join(__dirname, "src/contexts"),
        data: join(__dirname, "data"),
        graphql: join(__dirname, "src/graphql"),
        layouts: join(__dirname, "src/layouts"),
        media: join(__dirname, "assets/media"),
        pages: join(__dirname, "src/pages"),
        src: join(__dirname, "src"),
        styles: join(__dirname, "assets/styles"),
        templates: join(__dirname, "src/templates"),
        types: join(__dirname, "src/types"),
        utils: join(__dirname, "src/utils"),
      },
    },
    // sources
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "media",
        path: `${__dirname}/assets/media`,
      },
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
    // themes
    // - add gatsby themes here.
    // transformers
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
  ],
  siteMetadata: config,
};
