const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Sellbro`,
    description: `Sellbro company`,
    author: `@youngrake`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sellbro-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
          images: path.resolve(__dirname, 'src/images'),
          styles: path.resolve(__dirname, 'src/styles'),
          data: path.resolve(__dirname, 'src/data'),
        },
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
