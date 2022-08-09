require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `davelovemartin`,
    siteUrl: `https://www.davelovemartin.com`,
    twitter: `https://www.twitter.com/davelovemartin`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
        spaceId: process.env.CONTENTFUL_SPACE_ID || "",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
