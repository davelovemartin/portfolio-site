module.exports = {
  siteMetadata: {
    title: `portfolio-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "bced456d310144321e4c525c39a5213de96ee3900d6d516d8a6281e01c4703b8",
      "spaceId": ""
    }
  }, "gatsby-plugin-sass", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};