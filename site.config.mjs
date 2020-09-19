const { resolve } = require("path");

const logo = resolve(__dirname, "data/assets/logo.png");

export const metaData = {
  acronym: "GN",
  address: {
    locality: "Fake City",
    region: "FS",
    street: "123 Fake St.",
    zipcode: "12345",
  },
  contact: {
    email: "hello@withpulp.com",
    location: "https://goo.gl/maps/E7y5XUH2NWt",
    phone: "650-761-1372",
  },
  copyright: "© Handmade by With Pulp.",
  defaultDescription: "Nova is a gatsby starter made for quickly and easily launching SEO-friendly sites.",
  defaultTitle: "Launch a new site fast",
  hours: ["Mo-Fr 09:00-17:00", "Sa-Su 10:00-16:00"],
  image: logo,
  lang: "en",
  memorial: "In loving memory of Isam Machlovi (1986-2019).",
  name: "Gatsby Nova",
  organization: {
    name: "With Pulp",
    url: "https://withpulp.com",
  },
  pathPrefix: "/",
  siteUrl: "https://withpulp.com/gatsby",
};

export const manifest = {
  background_color: "#fff",
  display: "minimal-ui",
  icon: logo,
  name: metaData.name,
  short_name: metaData.acronym,
  start_url: metaData.pathPrefix,
  theme_color: "#4890ad",
};

export const socialMedia = {
  instagram: "_withpulp",
  twitter: "_withpulp",
};

module.exports = {
  manifest,
  metaData,
  socialMedia,
};
