const siteMetadata = {
  title: `Intersection Observer Visualizer`,
  description: `Intersection Observer Visualizer`,
  author: `@max8hine`,
  siteUrl: `https://www.gatsbyjs.org`,
  siteImage: "site-image.jpg",
  manifest: {
    name: `The Max`,
    short_name: `The Max`,
    start_url: `/`,
    background_color: `#FFFFFF`,
    theme_color: `#1E2023`,
    display: `minimal-ui`,
    icon: `src/images/icon/icon.png`,
    // legacy: false,
  },
  google: {
    siteVerification: {
      name: `google-site-verification`,
      content: `EX5_TiMSvOrtx5i76SwIFl1Ii7LHhkZL45F2i6NoMGc`,
    },
    analytics: {
      trackingId: `UA-174185897-1`,
      optimizeId: ``,
      experimentId: ``,
      variationId: ``,
    },
  },
  facebook: {
    id: `2335173010120621`,
  },
}

module.exports = {
  siteMetadata,
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
      options: siteMetadata.manifest,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Recursive\:300,900`],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: siteMetadata.google.analytics.trackingId,
    //     head: false,
    //     defer: false,
    //   },
    // },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
