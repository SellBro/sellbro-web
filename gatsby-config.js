const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Sellbro`,
    description: `Sellbro company`,
    author: 'youngrake',
  },
  plugins: [
    `gatsby-plugin-preload-fonts`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        images: path.resolve(__dirname, 'src/images'),
        fonts: path.resolve(__dirname, 'src/fonts'),
        pages: path.resolve(__dirname, 'src/pages'),
        styles: path.resolve(__dirname, 'src/styles'),
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        data: path.resolve(__dirname, 'src/data'),
      },
    },

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
  ],
};
