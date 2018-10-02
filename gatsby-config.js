module.exports = {
  siteMetadata: {
    title: "G.Ronca",
    author: "Giuseppe Ronca",
    description: "Personal website",
    siteUrl: `https://g-ronca.github.io`,
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`librebaskerville`, `open sans`]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630
            }
          },
          "gatsby-remark-copy-linked-files"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'G.Ronca Website',
        short_name: 'G.Ronca',
        start_url: '/',
        background_color: '#182216',
        theme_color: '#182216',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png', // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ]
};
