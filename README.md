# Gatsby Starter Nova

A new gatsby starter using the latest dependencies and standards.

> Please note, this is currently a work in progress so use at your own risk.

## Basic Installation

1. Install the Gatsby CLI tool if you don't have it: `yarn global add gatsby-cli`
2. Clone the repo: `git clone https://github.com/dvzrd/gatsby-starter-nova.git`
3. `cd gatsby-starter-nova`
4. `yarn`
5. `yarn dev` to start a local dev server at `http://localhost:8000`

## Stack

- Gatsby (Client)
- GraphQL (Data)
- MDX (Content)
- Netlify (Server)
- Tailwind (Styles)
- TypeScript (Types)

## Gatsby

Nova is composed of different gatsby plugins and themes.

For info about gatsby plugins and themes, see the following:

- https://www.gatsbyjs.com/tutorial/plugin-and-theme-tutorials/
- https://www.gatsbyjs.com/docs/plugins-themes-and-starters/
- https://www.gatsbyjs.com/docs/themes/what-are-gatsby-themes/
- https://www.gatsbyjs.com/tutorial/building-a-theme/
- https://www.gatsbyjs.com/blog/2020-05-14-introducing-gatsby-theme-catalyst/
- https://www.gatsbyjs.com/docs/plugins/

### Gatsby Plugins

#### Gatsby MDX

MDX with [`gatsby-plugin-mdx`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx).

- Configure plugins and other options in `gatsby-config`.
- Configure render options in `components/mdx`

#### Gatsby Next SEO

SEO with [`gatsby-plugin-next-seo`](https://github.com/ifiokjr/gatsby-plugin-next-seo).

- Configure defaults in `gatsby-config`.
- Configure page level SEO in `pages` by passing `seo` props to `layouts`.
- Configure `seo` props in the `frontmatter` of your `mdx/md` files.

### Custom Plugins and Themes

**Coming soon:**

- Components with TailwindCSS
  - Compositional UI Components
  - Structural UI Components
  - Typography UI Components
- Forms
  - Mailchimp / Netlify Integration
  - React Final Form
  - Validation with Yup
- MDX
  - Blog
  - Case Studies
  - Portfolio
  - Projects

## Netlify

You can use netlify to host the build, for more info about Netlify, [visit their site](https://www.netlify.com/). If you prefer to host on your own service or another platform, just remove the netlify config file.

### Netlify Config

Netlify allows for file configs of their host server - allowing devs to push changes to our builds without needing to login to the netlify app dashboard.

[Click here for more details about the config file](https://docs.netlify.com/configure-builds/file-based-configuration)

### Dev

It's recommended you setup netlify cli and run this project locally with netlify dev. For more info about netlify dev and how to set up, see the following resources:

- [Netlify CLI Docs Get Started](https://docs.netlify.com/cli/get-started/)
- [Netlify Dev Product Details Page](https://www.netlify.com/products/dev/)

## Roadmap

- [Hygen](https://github.com/jondot/hygen/)
- [Lint](https://www.gatsbyjs.com/docs/eslint/)
- [Tests](https://www.gatsbyjs.com/docs/unit-testing/)
