"use-strict";

const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");

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
