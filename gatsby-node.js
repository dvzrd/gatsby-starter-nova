"use-strict";

const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");
const { capitalize } = require("lodash");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ actions: { createNodeField }, getNode, node }) => {
  if (node.internal.type !== "Mdx") return;

  let slug = createFilePath({ node, getNode });
  if (slug.includes("posts")) slug = slug.replace("posts", "blog");
  if (slug.includes("projects")) slug = slug.replace("projects", "portfolio");

  // create slug node field.
  createNodeField({
    node,
    name: "slug",
    value: slug,
  });
};

exports.onCreatePage = async ({ actions: { deletePage }, page }) => {
  // make sure blacklisted directories and filenames aren't created into pages.
  const deleteBlackListedPages = () => {
    // directories and files to blacklist during page creation.
    const blacklist = [
      "assets",
      "components",
      "config",
      "media",
      "styles",
      "types",
    ];
    // delete pages whose pathnames include blacklisted keywords.
    if (blacklist.some((forbidden) => page.componentPath.includes(forbidden))) {
      deletePage(page);
    }
  };

  return await Promise.all([deleteBlackListedPages()]);
};

/**
 * Create folders for pages, posts, and images if they don't exist in the user's site.
 * This prevents Gatsby from throwing a build error.
 * https://www.gatsbyjs.org/docs/themes/conventions/#initializing-required-directories
 */
exports.onPreBootstrap = ({ store, reporter }) => {
  const {
    program: { directory },
  } = store.getState();

  const directories = [path.join(directory, "src/pages")];

  directories.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.log(`Creating the ${dir} directory.`);
      mkdirp.sync(dir);
    }
  });
};

exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  // create pages from markdown files.
  const createMarkdownPages = async ({ regex, pathPrefix = "" }) => {
    const result = await graphql(`
      {
        markdownPages: allMdx(
          filter: {
            fileAbsolutePath: { regex: "${regex}" }
            frontmatter: { published: { eq: true } }
          }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              body
              excerpt
              frontmatter {
                category
                date(formatString: "MMMM DD, YYYY")
                template
                title
              }
              slug
            }
          }
        }
      }
    `);

    // report any errors if they occurred.
    if (result.errors) {
      reporter.panicOnBuild("Errors while runnings graphQL query.");
      return;
    }

    const pages = result.data.markdownPages.edges;
    const markdownPages = pages.map(
      (
        {
          node: {
            frontmatter: { template },
            slug,
          },
        },
        index
      ) => {
        // define nextPage context node.
        const nextPage = index === 0 ? null : pages[index - 1].node;

        // define previousPage context node.
        const prevPage =
          index === pages.length - 1 ? null : pages[index + 1].node;

        // define page path using pathPrefix and slug
        const pagePath = `${pathPrefix}${slug}`;

        // create page with custom properties.
        return createPage({
          component: path.resolve(
            `${__dirname}/src/templates/${template}/${capitalize(
              template
            )}Template.tsx`
          ),
          context: {
            nextPage,
            prevPage,
            slug: pagePath,
          },
          path: pagePath,
        });
      }
    );

    return markdownPages;
  };

  // initialize when createPages method runs during build.
  return await Promise.all([
    // create post pages
    createMarkdownPages({
      regex: "/data/posts/",
    }),
  ]);
};
