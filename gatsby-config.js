/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Rajvir Singh`,
    description: `This is a small world of mine where share stuff I want to share about.`
  },
  plugins: [
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/images/` } },
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/posts/` } },
    { resolve: `gatsby-transformer-remark`, options: { plugins: [] }},
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`
  ],
}
