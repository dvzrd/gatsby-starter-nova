"use strict";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  acronym: "GN",
  address: {
    locality: "Fake City",
    region: "FS",
    street: "123 Fake St.",
    zipcode: "12345",
  },
  author: {
    email: "damir@withpulp.com",
    name: "Damir Vazgird",
    url: "https://damirvazgird.com",
  },
  copyright: {
    authorMessage: "Developed by ",
    message: "Published by ",
    year: 2020,
  },
  description:
    "Nova is a gatsby starter made for quickly and easily launching SEO-friendly sites.",
  footnote: "Stack: GatsbyJS, Netlify, TailwindCSS, TypeScript.",
  hours: ["Mo-Fr 09:00-17:00", "Sa-Su 10:00-16:00"],
  image: "static/logo.png",
  lang: "en",
  memorial: "In loving memory of Isam Machlovi (1986-2019).",
  name: "Gatsby Nova",
  organization: {
    email: "hello@withpulp.com",
    name: "With Pulp",
    telephone: "650-761-1372",
    url: "https://withpulp.com",
  },
  pathPrefix: "/",
  siteUrl: "https://gatsby-starter-nova.netlify.app",
  socialMedia: {
    instagram: "_withpulp",
    twitter: "_withpulp",
  },
  subscribeURL: process.env.MAILCHIMP_SUBSCRIBE_URL,
  title: "Launch a new site with ease",
};
