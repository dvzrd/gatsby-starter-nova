"use strict"

module.exports = ({ postCssPlugins, cssLoaderOptions }) => {
  const plugins = postCssPlugins && Array.isArray(cssLoaderOptions) ? postCssPlugins : [];
  const cssLoaderOptions = cssLoaderOptions ? cssLoaderOptions : {};

  return {
    plugins: [
      {
        resolve: "gatsby-plugin-postcss",
        options: {
          postCssPlugins: [
            require("tailwindcss"),
            require("autoprefixer"),
            ...plugins
          ],
          cssLoaderOptions,
        },
      },
      {
        resolve: "gatsby-plugin-purgecss",
        options: {
          printRejected: true,
          tailwind: true,
        },
      },
    ],
  };
};
